import type { XYPosition, Position } from './utils';

export interface Node<T = any> {
	id: string;
	position?: XYPosition;
	data: T;
	width?: number;
	height?: number;
	bgColor?: string;
	fontSize?: number;
	borderColor?: string;
	borderRadius?: number;
	textColor?: string;
	clickCallback?: Function;
	image?: boolean;
	src?: string;
	sourcePosition?: 'left' | 'right' | 'top' | 'bottom';
	targetPosition?: 'left' | 'right' | 'top' | 'bottom';
}

export interface Edge {
	id: string;
	source: string;
	target: string;
	label?: string;
	labelBgColor?: string;
	labelTextColor?: string;
	edgeColor?: string;
	type?: string;
	animate?: boolean;
	handle?: boolean; //Original was noHandle
	arrow?: boolean;
}

export interface DerivedEdge extends Edge {
	sourceX: number;
	sourceY: number;
	sourcePosition: Position;
	targetX: number;
	targetY: number;
	targetPosition: Position;
}

export interface EdgeProps extends DerivedEdge {
	path: string;
	centerX: number;
	centerY: number;
}

export interface EdgeTextProps {
	label?: any;
	labelBgColor?: string;
	labelTextColor?: string;
	centerX: number;
	centerY: number;
}

export interface Skilltree {
	id: string;
	name: string;
	teacherId: string;
	creator: {
		id: string;
		userId: string;
	};
	nodes: Node[];
	edges: Edge[];
}

export type HandleType = 'source' | 'target';
