module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTaskMutation
  end
end
