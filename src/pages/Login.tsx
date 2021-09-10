import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AuthContent } from "../components/AuthContent";
import { Form } from "../components/AuthForm/Form";
import { Input } from "../components/AuthForm/Input";
import { regex } from "../helpers/regex";
import { ValidationForm } from "../helpers/validateAuthForm";
import { useForm } from "../hooks/useForm";
import { mLogin } from "../redux/actions/authAction";
import { addErrors, removeErrors } from "../redux/actions/authErrorsAction";
import { TodoState } from "../types";

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const errors = useSelector((state: TodoState) => state.errors);
  const errorsRef = useRef<HTMLDivElement>(null);

  const { onInputChange, email, password, onReset } = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    const errors = new ValidationForm({ email }, { email: regex.email }).validateForm().getErrors();

    if (errors.length > 0) {
      dispatch(addErrors(errors));
    } else {
      dispatch(removeErrors());
      dispatch(mLogin({ email, password }));
      onReset();
    }
  };

  useEffect(() => {
    const showErrors = () => {
      if (errors.length > 0) {
        errorsRef.current?.classList.add("show-errors");
        setTimeout(() => {
          errorsRef.current?.classList.remove("show-errors");
        }, 3000);
        if (errors.length === 1) {
          document.getElementById(errors[0].getError().identifier)?.focus();
        }
      } else {
        errorsRef.current?.classList.remove("show-errors");
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
        title="Access your account"
        handleSubmit={handleSubmit}
      >
        <>
          <Input
            value={email}
            onInputChange={onInputChange}
            field="email"
            placeholder="E-mail"
          />
          <Input
            value={password}
            onInputChange={onInputChange}
            field="password"
            type="password"
            placeholder="Password"
          />
        </>
        <>
          <button>
            <span>Sign In</span>
          </button>
          <p>
           {" Don't have an account?"} <Link to="/auth/register">Sign up!</Link>{" "}
          </p>
        </>
      </Form>
      <div className="auth-form-errors" ref={errorsRef}>
        <ul className="errors">
          {errors.map((error: any) => (
            <li
              key={uuid()}
              className="error"
            >
              {error.error}
            </li>
          ))}
        </ul>
      </div>
    </AuthContent>
  );
}
