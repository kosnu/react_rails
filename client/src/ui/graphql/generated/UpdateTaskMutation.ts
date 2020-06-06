/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTaskMutation
// ====================================================

export interface UpdateTaskMutation_updateTask_task {
  __typename: "Task"
  id: string
  name: string
  describe: string
  deadlineAt: string | null
  completionAt: string | null
  createdAt: string
  updatedAt: string
}

export interface UpdateTaskMutation_updateTask {
  __typename: "UpdateTaskPayload"
  task: UpdateTaskMutation_updateTask_task
  errors: string[]
}

export interface UpdateTaskMutation {
  /**
   * Update Task Mutation
   */
  updateTask: UpdateTaskMutation_updateTask | null
}

export interface UpdateTaskMutationVariables {
  id: string
  name: string
  describe: string
  deadlineAt: string
  completionAt: string
}
