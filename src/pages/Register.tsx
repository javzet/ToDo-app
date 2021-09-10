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
import { mRegister } from "../redux/actions/authAction";
import { addErrors, removeErrors } from "../redux/actions/authErrorsAction";
import { TodoState } from "../types";

export function Register(): JSX.Element {
  const dispatch = useDispatch();
  const errors = useSelector((state: TodoState) => state.errors);
  const matchPasswordRef = useRef<HTMLDivElement>(null);

  const { onInputChange, email, name, password, confirmPassword, onReset } =
    useForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

  const handleSubmit = () => {
    const errors = new ValidationForm({ name, email, password }, regex)
      .validateForm({ field: "password", value: confirmPassword })
      .getErrors();

    if (errors.length > 0) {
      dispatch(addErrors(errors));
    } else {
      dispatch(removeErrors());
      dispatch(mRegister({ email, nombre: name, password }));
      onReset();
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
        if (errors.length === 1) {
          document.getElementById(errors[0].getError().identifier)?.focus();
        }
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
            type="password"
            placeholder="Type a password"
          />
          <Input
            value={confirmPassword}
            onInputChange={onInputChange}
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
      <div className="auth-form-errors" ref={matchPasswordRef}>
        <ul className="errors">
          {errors.map((error: any) => (
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
