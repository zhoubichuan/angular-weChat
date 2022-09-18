// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { TableListItem } from './data';

/** 获取规则列表 GET /api/tags */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: TableListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>(window.antdprourl + '/api/tags', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/tags */
export async function updateRule(options?: { [key: string]: any }) {
  return request<TableListItem>(window.antdprourl + '/api/tags', {
    method: 'PUT',
    data:{...(options || {})},
  });
}

/** 新建规则 POST /api/tags */
export async function addRule(options?: { [key: string]: any }) {
  return request<TableListItem>(window.antdprourl + '/api/tags', {
    method: 'POST',
    data:{...(options || {})},
  });
}

/** 删除规则 DELETE /api/tags */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>(window.antdprourl + '/api/tags', {
    method: 'DELETE',
    data:{...(options || {})},
  });
}