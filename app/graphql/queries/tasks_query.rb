module Queries
  class TasksQuery < GraphQL::Schema::Resolver
    type [Types::TaskType], null: false

    def resolve
      context[:current_user].tasks
    end
  end
end
