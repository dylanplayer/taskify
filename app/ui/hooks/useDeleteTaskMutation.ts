import { useMutation } from '@apollo/client';

import deleteTaskMutation from '../graphql/mutations/deleteTaskMutation';
import { Mutation } from '../graphql/types/graphql';

export default function useDeleteTaskMutation() {
  const mutation = useMutation<Mutation>(deleteTaskMutation);

  return mutation;
}
