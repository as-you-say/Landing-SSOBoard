// Library
import React from 'react';
import { actions } from '../../actions';

// Icons
import { BiMessageSquareAdd } from "react-icons/bi";
import { FaGithub, FaGitlab } from "react-icons/fa";

// Components
import { ModalTypes } from '../../components/Modal/information';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';

export default function SideBar() {
  const dispatch = useDispatch();

  // Event
  function onShowModal(){
    dispatch(actions.setValue('modalVisible', true));
  }
  function onClickMenu (e) {
    const target = e.currentTarget;
    const beforeTarget = document.querySelector('.menu.clear.on');
    const isBeforeTarget = beforeTarget !== null;
    if (isBeforeTarget) {
      beforeTarget.classList.remove('on');
    }
    target.className = 'menu clear on';
  }

  return (
    <>
      <aside id="side-bar" className="side-bar">
        {/* Group */}
        <h2 className="title clear">
          <div className="text">My Dashboard</div>
          <div className="icons" onClick={onShowModal}>
            <BiMessageSquareAdd/>
          </div>
        </h2>
        {/* //Group */}

        {/* Menu */}
        <ul className="list">
          {dataList.map(data => (
            <li key={data.id} className="menu clear" onClick={onClickMenu}>
              {data.type === 'GIT_HUB' ? <FaGithub />
              :data.type === 'GIT_LAB' ? <FaGitlab />
              :''}
              <span className="text">{data.title}</span>
            </li>
          ))}
        </ul>
        {/* //Menu */}
      </aside>
      <Modal type={ModalTypes.ADD_DASHBOARD}/>
    </>
  )
}

const dataList = [
  {id: 0, type:'GIT_HUB', title:'Github - Private'},
  {id: 1, type:'GIT_HUB', title:'Github - Company'},
  {id: 2, type:'GIT_LAB', title:'Gitlab - Private'},
  {id: 3, type:'GIT_LAB', title:'Gitlab - Filing Findings'},
]