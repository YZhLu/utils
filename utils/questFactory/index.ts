import type { Alternative } from '../../types/Alternative';
import type { FactoryData, RandomParams, Scope, InputObject } from '../../types/FactoryData';
import { evaluate } from 'mathjs';

// Generates a random number
const rdGen = (min: number, max: number, round?: number, type?: string) => {
	const numb = Math.random() * (max - min) + min;

	if (type === 'even') {
		const res = +numb.toFixed(round ? round : 0);
		return res % 2 === 0 ? res : res + 1;
	} else if (type === 'odd') {
		const res = +numb.toFixed(round ? round : 0);
		return res % 2 === 0 ? res + 1 : res;
	} else {
		return +numb.toFixed(round ? round : 0);
	}
};

// Check if the param is of type random
const rdCheck = (param: RandomParams) =>
	param.min !== undefined && param.max !== undefined && param.round !== undefined;

// Convert scope from string into object
const scopeMiddleware = (scope: string) => {
	const _scope: Scope = JSON.parse(scope);
	//console.log(" 00 ",_scope)

	Object.entries(_scope).forEach(([key, value]) => {
		if (typeof value !== 'string' && rdCheck(value)) {
			const { min, max, round, type } = value;
			const random = rdGen(min, max, round, type);
			_scope[key] = String(random);
		}
	});
	//console.log(" 01 ",_scope)
	return _scope;
};

const bodyParser = (body: string, scope: Scope /* { [id: string]: string } */) => {
	//console.log(body)
	const words = body.split('|');

	//console.log("words ", words, "scope", scope)
	const bodyParsed = words.map((word: string) => {
		return scope[word] !== undefined ? evaluate(middleParser(String(scope[word]), scope)) : word; //scope[word] : word;
	});

	return bodyParsed.join('');
};

const middleParser = (word: string, scope: Scope /* , data: FactoryData */) => {
	//const scope = scopeMiddleware(data.scope);
	const middleWords = word.split('|');
	const wordsParsed = middleWords.map((middleWord: string) => {
		return scope[middleWord] !== undefined ? scope[middleWord] : middleWord;
	});
	//console.log("Word", word,"MiddleWords ",middleWords, "wParserd", wordsParsed)
	return wordsParsed.join('');
};

const alternativeParser = (/* data: FactoryData, */ body: string, scope: Scope) => {
	const words = body.split('|');

	const bodyParsed = words.map((word: string) => {
		return scope[word] !== undefined ? evaluate(middleParser(String(scope[word]), scope)) : word;
	});

	return bodyParsed.join('');
};

function applyBodyParser(inputObj: InputObject, scope: Scope): InputObject {
	const transformedBlocks = inputObj.blocks.map((block) => ({
		...block,
		data: {
			...block.data,
			text: block.data.text ? bodyParser(block.data.text, scope) : '2345'
		}
	}));
	return {
		...inputObj,
		blocks: transformedBlocks
	};
}

function muxBody(input: string, scope: Scope): string | InputObject {
	try {
		const parsedJSON = JSON.parse(input);
		return applyBodyParser(parsedJSON, scope);
	} catch (error) {
		if (error instanceof SyntaxError && error.message.includes('JSON')) {
			return bodyParser(input, scope);
		} else {
			console.error('Erro:', error);
			return 'ERROR DETECTED';
		}
	}
}

export const questParser = (data: FactoryData) => {
	if (data.scope) {
		const scope = scopeMiddleware(data.scope);

		const body = muxBody(data.body, scope); //bodyParser(data.body, scope);
		const alternatives = data.alternatives.map((a: Alternative) => {
			return alternativeParser(a.statement, scope);
		});
		const questData = {
			body,
			alternatives
			/* editorBody */
		};
		return questData;
	} else {
		const questData = {
			body: data.body,
			alternatives: data.alternatives.map((a) => a.statement)
			/* editorBody */
		};
		return questData;
	}
	//let editorBody;
	/* if (data.editorBody) {
		editorBody = applyBodyParser(data.editorBody, scope);
	} */
	//console.log(muxBody(data.body, scope));
	//console.log(muxBody(JSON.stringify(data.editorBody), scope))

	// const questData = {
	// 	body,
	// 	alternatives
	// 	/* editorBody */
	// };

	// return questData;
};
