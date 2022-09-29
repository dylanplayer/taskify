Rails.application.routes.draw do
  get "/login", to: "login#new", as: :login
  get "/logout", to: "login#destroy", as: :logout
  get '/login/google/callback', to: 'login#create', as: :create_login
  
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  get "*all", to: "react#index"
  root "react#index"
end
