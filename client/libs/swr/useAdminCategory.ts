import useSWR from 'swr';
import { CategoryType } from '../../types';
import api from '../api';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export function useAdminCategory() {
  const { data, error, mutate } = useSWR<CategoryType[]>(
    'http://localhost:4000/category/admin',
    fetcher
  );

  return {
    data,
    error,
    mutate,
  };
}
export type categoryState = ReturnType<typeof useAdminCategory>;
