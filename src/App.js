import React from "react";
import Input from "./components/Input";

const App = () => {
  return (
    <>
      <p>Hello</p>
      <Input
        placeholder="Name" 
        name="name"
        type="text"
        required="true"
      />
    </>
  );
};

export default App;
