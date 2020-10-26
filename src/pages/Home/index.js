import React from 'react'
import Board from '../../layouts/Board';

import Header from '../../layouts/Header';
import Line from '../../layouts/Line';
import SideBar from '../../layouts/SideBar';

export default function Home() {

  return (
    <>
      <Header/>
      <SideBar/>
      <Line />
      <Board />
    </>
  )
}
