import { Link } from "react-router-dom";
import { AuthContent } from "../components/AuthContent";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { Form } from "../components/AuthForm/Form";
import { Input } from "../components/AuthForm/Input";
import { useForm } from "../hooks/useForm";
import { mRegister } from "../redux/actions/authAction";
import { useEffect, useRef, useState } from "react";
import { regex } from "../helpers/regex";
import { useValidateForm } from "../hooks/useValidateForm";
import axios from "axios";

interface Error {
  identifier: string;
  error: string;
}

export function Register(): JSX.Element {
  const dispatch = useDispatch();
  const matchPasswordRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Error[]>([]);

  const { onInputChange, email, name, password, confirmPassword, onReset } =
    useForm({
      name: "Frank",
      email: "frank12todo@gmail.com",
      password: "olaolaola315A",
      confirmPassword: "olaolaola315A",
    });

  const { validate } = useValidateForm();

  const handleSubmit = async () => {
    const errs = validate(
      {
        name,
        email,
        password,
      },
      regex,
      {
        field: "password",
        value: confirmPassword,
      }
    );
    if (errs.length > 0) {
      setErrors(errs);
    } else {
      setErrors([]);
      // dispatch(mRegister({ email, nombre: name, password }));
      fetch("https://todo-app-bkend.herokuapp.com/api/v1/usuario", {
        method: "POST",
        body: JSON.stringify({
          email,
          nombre: name,
          password,
        }),
      }).then((res) => {
        console.log(res);
      });
      // console.log(response.data);
      onReset();
      console.log("Registro exitoso");
    }
  };

  const handleErrorClick = (errorIdentifier: string) => {
    document.getElementById(errorIdentifier)?.focus();
  };

  useEffect(() => {
    const showErrors = () => {
      if (errors.length > 0) {
        matchPasswordRef.current?.classList.add("show-errors");
        setTimeout(() => {
          matchPasswordRef.current?.classList.remove("show-errors");
        }, 3000);
        if (errors.length === 1)
          document.getElementById(errors[0].identifier)?.focus();
      } else {
        matchPasswordRef.current?.classList.remove("show-errors");
      }
    };
    showErrors();
    return () => {
      showErrors();
    };
  }, [errors]);

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
            type="text"
            placeholder="Type a password"
          />
          <Input
            value={confirmPassword}
            onInputChange={onInputChange}
            field="confirmPassword"
            type="text"
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
      <div className="auth-form-errors" ref={matchPasswordRef}>
        <ul className="errors">
          {errors.map((error) => (
            <li
              key={uuid()}
              className="error"
              onClick={() => handleErrorClick(error.identifier)}
            >
              {error.error}
            </li>
          ))}
        </ul>
      </div>
    </AuthContent>
  );
}
