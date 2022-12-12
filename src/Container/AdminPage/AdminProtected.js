import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdminProtected = (props) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const checkUser = () => {
    const AdminEmail = localStorage.getItem('AdminEmail');
    const AdminPassword = localStorage.getItem('AdminPassword');
    if ((!AdminEmail || AdminEmail === 'undefined') && (!AdminPassword || AdminPassword === 'undefined')) {
      setIsAdmin(false);
      return navigate('/adminsignup')
    }
    setIsAdmin(true);
  } 

  useEffect(() => {
    checkUser();
  },[isAdmin]);
  return (<>
    {isAdmin ? props.children : null}
  </>)
}

export default AdminProtected;
