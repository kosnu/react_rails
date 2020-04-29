/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Todo_TaskConnectionFragment
// ====================================================

export interface Todo_TaskConnectionFragment_edges_node {
  __typename: "Task";
  id: string;
  name: string;
  describe: string;
  deadlineAt: string;
  completionAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Todo_TaskConnectionFragment_edges {
  __typename: "TaskEdge";
  /**
   * The item at the end of the edge.
   */
  node: Todo_TaskConnectionFragment_edges_node | null;
}

export interface Todo_TaskConnectionFragment {
  __typename: "TaskConnection";
  /**
   * A list of edges.
   */
  edges: (Todo_TaskConnectionFragment_edges | null)[] | null;
}
