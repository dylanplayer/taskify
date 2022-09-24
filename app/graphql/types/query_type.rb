module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :ping, resolver: Queries::PingQuery, null: false, description: "Test graphql query"
  end
end
