module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTaskMutation
    field :delete_task, mutation: Mutations::DeleteTaskMutation
  end
end
