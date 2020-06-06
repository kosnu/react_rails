/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTaskMutation
// ====================================================

export interface CreateTaskMutation_createTask_task {
  __typename: "Task"
  id: string
  name: string
  describe: string
  deadlineAt: string | null
  completionAt: string | null
  createdAt: string
  updatedAt: string
}

export interface CreateTaskMutation_createTask {
  __typename: "CreateTaskPayload"
  task: CreateTaskMutation_createTask_task
  errors: string[]
}

export interface CreateTaskMutation {
  /**
   * Create Task Mutation
   */
  createTask: CreateTaskMutation_createTask | null
}

export interface CreateTaskMutationVariables {
  name: string
  describe: string
  deadlineAt: string
  completionAt: string
}
