import React from 'react'
import { BiLinkExternal } from 'react-icons/bi';

export default function KanbanBoard ({ 
  className, 
  Icon, 
  dataList, 
  title, 
  emptyText="No data", 
  onClickCard=function(e){}
}) {
  return (
    <div className={"kanban " + className}>
      <h2 className="title">{title}</h2>
      <ul>
        {dataList.length === 0 
         ? <li className="card empty">{emptyText}</li>
         : <></>
        }
        {dataList.map(data => (
        <li key={data.id} className="card repository clear" onClick={() => {onClickCard(data.id)}}>
          <div className="logo">
            <div className="inner">
              <Icon />
            </div>
          </div>
          <a className="link" href={data.link}><BiLinkExternal/></a>
          <div className="card-content">
            <h3 className="sub-title">{data.name}</h3>
            <div className="taglist">
              <span className="tag red">private</span>
              <span className="tag blue">Node</span>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}