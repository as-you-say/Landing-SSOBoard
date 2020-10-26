import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions';

import {
  ModalTypes,
  ModalInfo
} from './information';
import DashboardForm from './Forms/DashboardForm';

/**
 * 
 * @param {object} param
 * @param {string} param.type
 */
export default function Modal({ type }) {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.common.modalVisible);
  function onClose(){
    dispatch(actions.setValue('modalVisible', false));
  }

  return (
    ModalTypes[type] === undefined 
    ? <></> 
    : <div id="modal" className={visible ? "on" : ""}>
        <div className="modal">
          <h2 className="title">{ModalInfo[type].title}</h2>
          <p className="description">{ModalInfo[type].description}</p>
          <DashboardForm />
          <div className="button-box">
            <button className="critical js-save">저장</button>
            <button className="normal js-close" onClick={onClose}>취소</button>
          </div>
        </div>
      </div>
  )
}