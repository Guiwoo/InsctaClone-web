import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../Components/auth/AuthLayout";
import SButton from "../Components/auth/Button";
import SSeperator from "../Components/auth/Seperator";

import Input from "../Components/auth/Input";
import FormBox from "../Components/auth/FormBox";
import BottomBox from "../Components/auth/BottomBox";
import { FatLink } from "../Components/shared";
import PageTitle from "../Components/pageTitle";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  width: 80%;
  text-align: center;
  margin-top: 15px;
`;

const SignUp = () => (
  <AuthLayout>
    <PageTitle title="Sign up" />
    <FormBox>
      <HeaderContainer>
        <FontAwesomeIcon icon={faInstagram} size={"4x"} />
        <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>
      </HeaderContainer>
      <form>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <SButton type="submit" value="Log in" />
      </form>
    </FormBox>
    <BottomBox cta="Have an account ? " linkText="Log in" link={routes.home} />
  </AuthLayout>
);

export default SignUp;
