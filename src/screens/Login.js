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
import { useForm } from "react-hook-form";
import FormError from "../Components/auth/FormError";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { userName, password } = getValues();
    login({
      variables: { userName, password },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size={"4x"} />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("userName", {
              required: "Username is required!",
              minLength: {
                value: 5,
                message: "Username should be longer than 5 characters",
              },
            })}
            onFocus={() => clearLoginError()}
            placeholder="Username"
            name="userName"
            type="text"
            hasError={Boolean(errors?.userName?.message)}
          />
          <FormError message={errors?.userName?.message} />
          <Input
            {...register("password", { required: "Password is required" })}
            onFocus={() => clearLoginError()}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors.password?.message} />
          <SButton
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={errors?.result?.message} />
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
