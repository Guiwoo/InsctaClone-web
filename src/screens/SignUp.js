import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../Components/auth/AuthLayout";
import SButton from "../Components/auth/Button";

import Input from "../Components/auth/Input";
import FormBox from "../Components/auth/FormBox";
import BottomBox from "../Components/auth/BottomBox";
import { FatLink } from "../Components/shared";
import PageTitle from "../Components/pageTitle";
import { useForm } from "react-hook-form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import FormError from "../Components/auth/FormError";

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

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState,
    clearErrors,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    const { userName, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    history.push(routes.home, {
      message: "Accout Created Please Login!",
      userName,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size={"4x"} />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("firstName", {
              required: "Need to fill Frist Name",
            })}
            type="text"
            placeholder="First Name"
            onFocus={clearLoginError}
          />
          <Input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
            onFocus={clearLoginError}
          />
          <Input
            {...register("email", {
              required: "Need to fill Email",
            })}
            type="text"
            placeholder="Email"
            onFocus={clearLoginError}
          />
          <Input
            {...register("userName", {
              required: "Need to fill User Name",
            })}
            type="text"
            placeholder="Username"
            onFocus={clearLoginError}
          />
          <Input
            {...register("password", {
              required: "Need to fill Password",
            })}
            type="password"
            placeholder="Password"
            onFocus={clearLoginError}
          />
          <SButton
            type="submit"
            value={loading ? "Loading..." : "Sign in"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={errors?.result?.message} />
        </form>
      </FormBox>
      <BottomBox
        cta="Have an account ? "
        linkText="Log in"
        link={routes.home}
      />
    </AuthLayout>
  );
};

export default SignUp;
