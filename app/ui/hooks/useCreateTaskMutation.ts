import { useMutation } from '@apollo/client';

import createMutation from '../graphql/mutations/createTaskMutation';
import { Mutation } from '../graphql/types/graphql';

export default function useCreateTaskMutation() {
  const mutation = useMutation<Mutation>(createMutation);

  return mutation;
}
