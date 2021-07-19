import { darkModeVar, isLoggedInVar } from "../apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Login = () => (
  <Container>
    <Title>Log-in</Title>
    <button onClick={() => darkModeVar(true)}>다크 모드</button>
    <button onClick={() => darkModeVar(false)}>라이트 모드</button>
  </Container>
);

export default Login;
