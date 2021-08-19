import { FC } from "react";
import { useDispatch } from "react-redux";
import { mLogin } from "../redux/actions/authAction";

export const Register: FC = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(mLogin({email: "test2@todo-app.com", password: "test"}));
  }

  return <>Register
  
    <button onClick={handleClick}>Login</button>
  </>;
};
