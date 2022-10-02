module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :ping, resolver: Queries::PingQuery, null: false,
      description: "Test graphql query"
    field :tasks, resolver: Queries::TasksQuery, null: false,
      description: "All tasks for the current user"
  end
end
