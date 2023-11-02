import { PageContainer } from '@ant-design/pro-layout';
import { Input } from 'antd';
import type { FC } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { history } from 'umi';
import { list, addList, updateList, removeList, exportList, getTemplate } from './service';

type SearchProps = {
  match: {
    url: string;
    path: string;
  };
  location: {
    pathname: string;
  };
};

const Search: FC<SearchProps> = (props) => {
  const path: string = location.pathname.replace('/antdpro-demo', '');
  const [templateData, setTemplateData] = useState<any>([]);
  const getTabKey = () => {
    const { match, location } = props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');
    if (tabKey.includes('articles')) {
      return 'articles';
    }
    if (tabKey.includes('projects')) {
      return 'projects';
    }
    if (tabKey.includes('applications')) {
      return 'applications';
    }
  };
  const [activeKey, setActiveKey] = useState<string>('');
  const getTemplateData = async () => {
    let template: any = [];
    const result = await list('type/1', {
      current: 1,
      pageSize: 20,
    });
    template = result.data;
    setTemplateData(template);
    if (!activeKey) {
      setActiveKey(getTabKey() + '/' + template[0].value);
    }
  };
  useEffect(() => {
    getTemplateData();
  }, []);
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    history.push(`${url}/${key}`);
    setActiveKey(getTabKey() + '/' + key);
  };

  const handleFormSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <PageContainer
      content={
        <div style={{ textAlign: 'center' }}>
          <Input.Search
            placeholder="请输入"
            enterButton="搜索"
            size="large"
            onSearch={handleFormSubmit}
            style={{ maxWidth: 522, width: '100%' }}
          />
        </div>
      }
      tabList={templateData.map((item: any) => ({
        key: getTabKey() + '/' + item.value,
        tab: item.name,
      }))}
      tabActiveKey={activeKey}
      onTabChange={handleTabChange}
    >
      {props.children}
    </PageContainer>
  );
};

export default Search;
