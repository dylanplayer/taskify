module Queries
  class PingQuery < GraphQL::Schema::Resolver
    type String, null: false

    def resolve
      "pong"
    end
  end
end
