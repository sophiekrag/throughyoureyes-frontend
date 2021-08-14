import React, { useState, useEffect } from "react";

import AxioxApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";

const AccountIndex = () => {
  const [myChildren, setMyChildren] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxioxApi("myChildren");
      const usersChildren = await result.data.children;
      console.log(usersChildren)
      setMyChildren([...usersChildren]);
    };
    fetchUserData()
  }, []);

  return (
      <>
      <NavBar/>
      {myChildren.length > 0 && myChildren.map((child) => (
          <p key={child.id}>{child.username}</p>
      ))}
      </>
  );
};

export default AccountIndex;
