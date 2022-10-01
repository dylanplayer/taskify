import { useQuery } from '@apollo/client';

import testQuery from '../graphql/queries/testQuery';
import { TestQuery } from '../graphql/types/graphql';

export default function useTestQuery() {
  const { loading, error, data } = useQuery<TestQuery>(testQuery);

  return { loading, error, data };
}