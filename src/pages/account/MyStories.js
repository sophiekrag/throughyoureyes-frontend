import React, { useState, useEffect } from "react";

import AxioxApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxioxApi("myStories");
      const usersStories = await result.data.stories;
      console.log(usersStories)
      setMyStories([...usersStories]);
    };
    fetchUserData()
  }, []);

  return (
      <>
      <NavBar/>
      {myStories.length > 0 && myStories.map((story) => (
          <>
          <p key={story.id}>{story.title}</p>
          <img src={story.media} alt={story.title}/>
          </>
      ))}
      </>
  );
};

export default MyStories;