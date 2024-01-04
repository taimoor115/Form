import { useState } from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

const App = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="p-4 border">
        <Header name={toogle ? "Sign Up" : "Login"} />
        <div className=" d-flex justify-content-around mt-5">
          <Button name="Sign Up" onClick={() => setToogle(true)} />
          <Button name="Login" onClick={() => setToogle(false)} />
        </div>
        {toogle ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default App;
