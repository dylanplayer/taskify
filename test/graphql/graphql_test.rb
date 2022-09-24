class GraphQLTest < ActionController::TestCase
  tests GraphqlController

  def perform(query)
    post :execute, params: { query: query() }
    json = JSON.parse(response.body)
  end
end
