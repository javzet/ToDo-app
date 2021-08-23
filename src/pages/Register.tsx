import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthContent } from "../components/AuthContent";
// import { useDispatch } from "react-redux";
import { Form } from "../components/AuthForm/Form";
import { Input } from "../components/AuthForm/Input";
import { useForm } from "../hooks/useForm";

export const Register: FC = () => {
  // const dispatch = useDispatch();

  const { onInputChange, email, name, password, confirmPassword } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    alert("jeeeejejejjejej aún no está");
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
};
