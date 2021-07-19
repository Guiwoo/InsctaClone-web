import { isLoggedInVar } from "../apollo";

const Login = () => (
  <div>
    <h1>Log-in</h1>
    <button onClick={() => isLoggedInVar(true)}>로그인 하자</button>
  </div>
);

export default Login;
