import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const ProtectedRegis = (props) => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const checkUser = () => {
    const userEmail = localStorage.getItem('Email');
    const userPassword = localStorage.getItem('Password');
    if ((!userEmail || userEmail === 'undefined') && (!userPassword || userPassword === 'undefined')) {
      setIsRegistered(false);
      return navigate('/signup')
    }
    setIsRegistered(true);
  } 

  useEffect(() => {
    checkUser();
  }, [isRegistered]);
  return (<>
    {isRegistered ? props.children : null}
  </>)
}

export default ProtectedRegis;
