import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxioxApi from "../../utils/AxiosApi";

const MyChildren = () => {
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
      {myChildren.length > 0 && myChildren.map((child) => (
          <p key={child.id}>{child.username}</p>
      ))}
      </>
  );
};

export default MyChildren;
