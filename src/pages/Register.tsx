import axios from "axios";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { mLogin } from "../redux/actions/authAction";

export const Register: FC = () => {
  const dispatch = useDispatch();

  const a = async () => {
    const data = { email: "admin@todo.com", password: "admin" };
    const response = await axios.post(
      "https://todo-app-bkend.herokuapp.com/api/v1/login",
      data
    );
    console.log(response);
  };

  const handleClick = () => {
    // dispatch(mLogin({ email: "test@todo.com", password: "test" }));
    a();
  };

  return (
    <>
      Register
      <button onClick={handleClick}>Login</button>
    </>
  );
};
