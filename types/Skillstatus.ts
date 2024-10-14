import type { Node } from './Skillspace';
import type { Edge } from './Skillspace';
import type { User } from './User';

/* status: {
    id: string,
        value: number,
            nodeId: string
} [],
 */

export interface Status {
	id: string;
	value: number;
}

export interface SkillNode {
	id: string;
	status: Status;
	node: Node;
	group: string[];
	deep: number;
}

export type Skillstatus = {
	id: string;
	user: User;
	height: number;
	width: number;
	nodes: SkillNode[];
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
	sizeWidth: number;
	sizeHeight: number;
};
