import { useRef } from "react";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" ref={emailRef} placeholder="Email" />

        <label htmlFor="password">Password</label>
        <input type="password" ref={passwordRef} placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
