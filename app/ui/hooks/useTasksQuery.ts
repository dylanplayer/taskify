import { useQuery } from '@apollo/client';

import tasksQuery from '../graphql/queries/tasksQuery';
import { TasksQuery } from '../graphql/types/graphql';

export default function useTasksQuery() {
  const { loading, error, data } = useQuery<TasksQuery>(tasksQuery);

  return { loading, error, data };
}
