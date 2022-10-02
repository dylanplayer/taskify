import gql from 'graphql-tag';

const deleteTask = gql`
  mutation deleteTask($id: Int!) {
    deleteTask (
      input: {
        id: $id
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

export default deleteTask;
