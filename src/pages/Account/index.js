import React from 'react'
import { useParams } from "react-router-dom";

import LogIn from '../../layouts/LogIn';
import SignUp from '../../layouts/SignUp';

export default function Account() {
  let { type } = useParams();
  return (
    <>
    {type === 'signup'
     ? <SignUp />
     : <LogIn /> 
    }
    </>
  )
}
