import gql from 'graphql-tag';

const createTask = gql`
  mutation createTask($title: String!) {
    createTask (
      input: {
        title: $title
      }
    ) {
      task {
        id,
        title,
        createdAt,
        updatedAt,
      },
      errors
    }
  }
`;

export default createTask;
