/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoPageQuery
// ====================================================

export interface TodoPageQuery_tasks_edges_node {
  __typename: "Task";
  id: string;
  name: string;
  describe: string;
  deadlineAt: string;
  completionAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoPageQuery_tasks_edges {
  __typename: "TaskEdge";
  /**
   * The item at the end of the edge.
   */
  node: TodoPageQuery_tasks_edges_node | null;
}

export interface TodoPageQuery_tasks {
  __typename: "TaskConnection";
  /**
   * A list of edges.
   */
  edges: (TodoPageQuery_tasks_edges | null)[] | null;
}

export interface TodoPageQuery {
  /**
   * タスク
   */
  tasks: TodoPageQuery_tasks | null;
}

export interface TodoPageQueryVariables {
  name?: string | null;
}
