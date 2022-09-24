require 'test_helper'

module Queries
  class PingQueryTest < GraphQLTest
    test 'ping returns pong' do
      response = perform(query)
      assert_equal 'pong', response["data"]["ping"]
    end

    private

    def query
      <<~GQL
        query {
          ping
        }
      GQL
    end
  end
end

