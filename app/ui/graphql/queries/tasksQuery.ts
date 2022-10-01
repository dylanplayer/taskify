import gql from 'graphql-tag';

const tasks = gql`
  query tasks {
    tasks {
      id,
      title,
      createdAt,
      updatedAt,
    }
  }
`;

export default tasks;
