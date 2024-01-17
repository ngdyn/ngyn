/**
 * Generic types for tree nodes
 */

export interface NgynNode {
  parent?: NgynNode;

  index?: number;
  deep: number;
  path: string[];
  route: string[];

  ngynId?: string;
  instance: string;
}
