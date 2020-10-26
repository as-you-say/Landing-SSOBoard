import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../actions';

/**
 * 
 * @param {object} param
 * @param {string =} param.link
 * @param {string =} param.name
 */
export default function DashboardForm ({ link="", name="" }) {
  const dispatch = useDispatch();
  const { dashboardFormLink, dashboardFormName } = useSelector(state => state.common);

  useEffect(() => {
    dispatch(actions.setValue('dashboardFormLink', dashboardFormLink));
    dispatch(actions.setValue('dashboardFormName', dashboardFormName));
    console.log('DashboardForm - useEffect');
  }, [])

  function onChangeLink (e) {
    dispatch(actions.setValue('dashboardFormLink', e.currentTarget.value));
  }
  function onChangeName (e) {
    dispatch(actions.setValue('dashboardFormName', e.currentTarget.value));
  }

  console.log('DashboardForm - rendering');
  return (
    <>
      <form className="form">
        <div className="input">
          <input id="url" type="text" value={dashboardFormLink} onChange={onChangeLink} />
          <label htmlFor="url">Repository Link</label>
        </div>
        <div className="input">
          <input id="name" type="text" value={dashboardFormName} onChange={onChangeName}/>
          <label htmlFor="name">Project Name</label>
        </div>
      </form>
    </>
  )
}