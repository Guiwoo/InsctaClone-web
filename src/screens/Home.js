import { logUserOut } from "../apollo";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Welcomd we did it</h1>
      <button onClick={() => logUserOut(history)}>
        로그아웃 생활화 합시다.
      </button>
    </div>
  );
};

export default Home;
