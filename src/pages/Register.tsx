import { Link } from "react-router-dom";
import { AuthContent } from "../components/AuthContent";
import { useDispatch } from "react-redux";
import { Form } from "../components/AuthForm/Form";
import { Input } from "../components/AuthForm/Input";
import { useForm } from "../hooks/useForm";
import { mRegister } from "../redux/actions/authAction";
import { useEffect, useRef } from "react";
import {
  validateAuthFormFields,
  validateMatchPasswords,
} from "../helpers/validateAuthForm";

export function Register(): JSX.Element {
  const dispatch = useDispatch();

  const { onInputChange, email, name, password, confirmPassword, state } =
    useForm({
      name: "Javier",
      email: "zacag1500@gmail.com",
      password: "test3123Tasd*3",
      confirmPassword: "tes",
    });

  const handleSubmit = () => {
    const regex = {
      name: /([áéíóúaA-zZÁÉÍÓÚ ]{2,})+/,
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
    };
    let errors: any[] = [validateMatchPasswords(password, confirmPassword)];
    // dispatch(mRegister({ email, nombre: name, password }));
    validateMatchPasswords(password, confirmPassword);

    console.log(validateAuthFormFields({ name, password, email }, regex));
  };

  const validation = (value: string) => {
    console.log(value);
  };

  return (
    <AuthContent>
      <Form
        type="register"
        title="Create an account"
        handleSubmit={handleSubmit}
      >
        <>
          <Input
            value={name}
            onInputChange={onInputChange}
            field="name"
            placeholder="Your name"
          />
          <Input
            value={email}
            onInputChange={onInputChange}
            field="email"
            placeholder="Your e-mail"
          />
          <Input
            value={password}
            onInputChange={onInputChange}
            field="password"
            type="password"
            placeholder="Type a password"
          />
          <Input
            value={confirmPassword}
            onInputChange={onInputChange}
            validation={validation}
            field="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
        </>
        <>
          <button>
            <span>Sign Up</span>
          </button>
          <p>
            Already have an account? <Link to="/auth/login">Sign in!</Link>{" "}
          </p>
        </>
      </Form>
      <div className="auth-form-errors">
        <ul className="errors"></ul>
      </div>
    </AuthContent>
  );
}
