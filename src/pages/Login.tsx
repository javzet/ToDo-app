import { Link } from "react-router-dom";
import { AuthContent } from "../components/AuthContent";
// import { useDispatch } from "react-redux";
import { Form } from "../components/AuthForm/Form";
import { Input } from "../components/AuthForm/Input";
import { useForm } from "../hooks/useForm";

export function Login(): JSX.Element {
  // const dispatch = useDispatch();

  const { onInputChange, email, password } = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    alert("jeeeejejejjejej aún no está");
  };

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
      <div className="auth-form-errors">
        <ul className="errors"></ul>
      </div>
    </AuthContent>
  );
}
