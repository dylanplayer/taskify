module Mutations
  class CreateTaskMutation < BaseMutation
    argument :title, String

    field :task, Types::TaskType
    field :errors, [String], null: false

    def resolve(title:)
      title = ActionView::Base.full_sanitizer.sanitize(title)
      return GraphQL::ExecutionError.new("Task title is not valid.") if title.blank?

      task = Task.create(
        title: title,
        user: context[:current_user]
      )
      if task.save
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
