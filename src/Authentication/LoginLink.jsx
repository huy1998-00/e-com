import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { deleteSession } from "../Redux/Action/ActionSession";

function LoginLink(props) {
  const dispatch = useDispatch();

  const onRedirect = () => {
    localStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    const action = deleteSession("");
    dispatch(action);
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
