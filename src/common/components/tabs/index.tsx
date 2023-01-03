import React, { useState, useEffect } from 'react';
import TabsButton from '../tabsButton';
import InputSearch from '../inputSearch';
import TabDisplay from '../tabDisplay';
import { TabsProps, NoticiasTajetas } from './types';
import './styles/index.css';

export function Tabs({ tabsValuesArray, newsGridArray }: TabsProps) {
  const [category, setCategory] = useState<string>('todo');
  const [news, setNews] = useState<NoticiasTajetas[]>(newsGridArray);

  useEffect(() => {
    if (category !== 'todo') {
      setNews(
        newsGridArray.filter((item) => {
          return item.parent.categoria?.toLocaleLowerCase() === category;
        })
      );
    } else {
      setNews(newsGridArray);
    }
  }, [category]);

  return (
    <>
      <div className="lg:w-[1400px] m-auto">
        <div className="lg:mx-16 lg:flex block lg:flex-none justify-between items-center mt-5">
          <ul
            className="nav nav-tabs list-none ListTabs"
            id="tabs-tab"
            role="tablist">
            {tabsValuesArray.map((TabsValues: any) => {
              return (
                <TabsButton
                  key={TabsValues.id}
                  tabsValue={TabsValues.TabValue}
                  tabName={TabsValues.TabName}
                  isActive={TabsValues.id === -1 ? 'active' : ''}
                  onclick={setCategory}
                />
              );
            })}
          </ul>
          <InputSearch />
        </div>
        <div className="tab-content" id="tabs-tabContent">
          {tabsValuesArray.map((TabsValues: any) => {
            return (
              <TabDisplay
                key={TabsValues.id}
                TabsValue={TabsValues.TabValue}
                IsActive={TabsValues.id === 0 ? 'active' : ''}
                IsShow={TabsValues.id === 0 ? 'show' : ''}
                NewsGridArray={news}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
