import { isLoggedInVar, logUserOut } from "../apollo";

const Home = () => (
  <div>
    <h1>Welcomd we did it</h1>
    <button onClick={() => logUserOut()}>로그아웃 생활화 합시다.</button>
  </div>
);

export default Home;
