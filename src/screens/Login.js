import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../Components/auth/AuthLayout";
import SButton from "../Components/auth/Button";
import SSeperator from "../Components/auth/Seperator";
import Input from "../Components/auth/Input";
import FormBox from "../Components/auth/FormBox";
import BottomBox from "../Components/auth/BottomBox";
import PageTitle from "../Components/pageTitle";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size={"4x"} />
        </div>
        <form>
          <Input placeholder="Username" type="text" />
          <Input type="password" placeholder="Password" />
          <SButton type="submit" value="Log in" />
        </form>
        <SSeperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Dont' have an account ? "
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
};

export default Login;
