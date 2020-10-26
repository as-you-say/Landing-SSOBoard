import React from 'react'
import { useSelector } from 'react-redux';
import GitHub from '../GitHub';
import GitLab from '../GitLab';

export default function Board() {

  // if(board === undefined){
  //   return <></>
  // }

  return (
    <section id="board">
      <div className="board">
        <div className="contents">
          {/* <GitHub /> */}
          <GitLab />
        </div>
      </div>
    </section>
  )
}
