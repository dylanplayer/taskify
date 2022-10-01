import { useMutation } from '@apollo/client';

import createMutation from '../graphql/mutations/createTaskMutation';
import { CreateTaskMutationInput } from '../graphql/types/graphql';

export default function useCreateTaskMutation() {
  const mutation = useMutation<CreateTaskMutationInput>(createMutation);

  return mutation;
}
