import { isLoggedInVar } from "../apollo";

const Home = () => (
  <div>
    <h1>Home-in</h1>
    <button onClick={() => isLoggedInVar(false)}>
      로그아웃 생활화 합시다.
    </button>
  </div>
);

export default Home;
