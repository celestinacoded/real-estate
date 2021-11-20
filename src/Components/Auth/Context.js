import React, { useState } from "react";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { fireAuth, firestore } from "./.././../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Register = () => {
  const [reg, setReg] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleSignIn = () => {
    setReg(!reg);
  };
  // signUp schema
  let signUpschema = yup.object().shape({
    userName: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    password: yup.string().required("This field is required").min(6),
    confirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  // signUp schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpschema),
  });

  const onSubmitSignUp = async (data) => {
    console.log(data);
    const { email, password, userName } = data;
    setPending(true);
    try {
      const user = await createUserWithEmailAndPassword(fireAuth, email, password);
      if (user) {
        const collRef = collection(firestore, "userData");
        const payload = { email, userName };
        addDoc(collRef, payload);
        setPending(false);
        updateProfile(user.user, { displayName: userName });
      }
    } catch (error) {
      setPending(false);
      setIsError("An error occured, try again");
    }
  };
  const onSubmitSignIn = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      await signInWithEmailAndPassword(fireAuth, userEmail, userPassword);
      setUserEmail("");
      setUserPassword("");
      setPending(false);
      setIsError(null);
    } catch (error) {
      setPending(false);
      console.log(error.message);
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          return setIsError("An error occurred");
        default:
          return setIsError("error");
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          {reg ? (
            <div>
              <Form onSubmit={handleSubmit(onSubmitSignUp)}>
                <h1>Join us</h1>
                <Input type="text" placeholder="Username" {...register("userName")} />
                <Error>{errors.userName?.message}</Error>
                <Input type="email" placeholder="Email" {...register("email")} />
                <Error>{errors.email?.message}</Error>
                <Input type="password" placeholder="Password" {...register("password")} />
                <Error>{errors.password?.message}</Error>
                <Input type="password" placeholder="Confirm password" {...register("confirm")} />
                <Error>{errors.confirm?.message}</Error>
                {!pending && <Button type="submit">Sign up</Button>}
                {pending && <Button disabled>Loading</Button>}

                <div>Already have an account?</div>
                <Btn onClick={handleSignIn}>Sign In!</Btn>
              </Form>
            </div>
          ) : (
            <div>
              <Form onSubmit={onSubmitSignIn}>
                <h1>Sign In</h1>
                <Inputt
                  type="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Inputt
                  type="password"
                  placeholder="Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                {isError && <Error>{isError}</Error>}
                {!pending && <Button type="submit">Login</Button>}
                {pending && <Button disabled>Loading</Button>}
                <div>New to Apartments?</div>
                <Btn onClick={handleSignIn}>Join now!</Btn>{" "}
              </Form>
            </div>
          )}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Card = styled.div`
  width: 350px;
  min-height: 50vh;
  height: 100%;
  border: 1px solid lightgray;
  padding: 20px 20px;
  border-radius: 10px;

  box-shadow: -1px -6px 76px -15px rgba(0, 0, 0, 0.68) inset;
  -webkit-box-shadow: -1px -6px 76px -15px rgba(0, 0, 0, 0.68) inset;
  -moz-box-shadow: -1px -6px 76px -15px rgba(0, 0, 0, 0.68) inset;
`;

const Btn = styled.div`
  color: blue;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: bold;
  }
`;
const Error = styled.div`
  color: red;
  font-size: 10px;
  text-align: left;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 0;
  font-size: 17px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 250px;
  height: 30px;
  border: 1px solid lightgray;
  margin: 5px 0;
  border-radius: 5px;
  outline: none;
  padding: 5px;
`;
const Inputt = styled.input`
  width: 250px;
  height: 30px;
  border: 1px solid lightgray;
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  padding: 5px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
