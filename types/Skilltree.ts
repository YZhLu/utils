import type { Node } from './Skillspace';
import type { Edge } from './Skillspace';

export type Skilltree = {
	id: string;
	name: string;
	teacherId: string;
	creator: {
		id: string;
		userId: string;
	};
	nodes: Node[];
	/*   {
            id: string,
            x: number,
            y: number,
            skilltreeId: string,
            skillId: string,
            data: {
                id: string,
                label: string,
                description: string
            }
        }
     */
	edges: Edge[];
	/* {
            id: string,
            source: string,
            target: string,
            skilltreeId: string
        } */
};
