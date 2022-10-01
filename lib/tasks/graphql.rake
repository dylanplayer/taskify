require "graphql/rake_task"
GraphQL::RakeTask.new(
  schema_name: "TaskifySchema",
  directory: "./app/ui/graphql/",
)
