module Mutations
  class DeleteTaskMutation < BaseMutation
    argument :id, Integer

    field :task, Types::TaskType
    field :errors, [String], null: false

    def resolve(id:)
      task = Task.find_by(id: id, user: context[:current_user])

      if task.destroy
        {
          task: task,
          errors: [],
        }
      else
        {
          task: nil,
          errors: task.errors.full_messages
        }
      end
    end
  end
end
