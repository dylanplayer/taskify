module Types
  class QueryType < Types::BaseObject
    field :test_field, UserType, null: false

    def test_field
      context[:current_user]
    end
  end
end
