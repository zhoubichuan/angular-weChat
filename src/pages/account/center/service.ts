import { request } from 'umi';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request(window.antdprourl + '/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request(window.antdprourl + '/api/fake_list_Detail', {
    params,
  });
}
