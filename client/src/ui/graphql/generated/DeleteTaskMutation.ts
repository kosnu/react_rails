/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTaskMutation
// ====================================================

export interface DeleteTaskMutation_deleteTasks {
  __typename: "DeleteTasksPayload"
  errors: string[]
}

export interface DeleteTaskMutation {
  /**
   * Delete Tasks Mutation
   */
  deleteTasks: DeleteTaskMutation_deleteTasks | null
}

export interface DeleteTaskMutationVariables {
  ids: string[]
}
