import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Login = ({ loginRequest, storeId, isLoginInfoIncorrect, userId, userAuthToken }) => {
  const [inputUsernameValue, setinputUsernameValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authURL = 'http://localhost:8000/api/token/' 
    try {
          await axios.post(authURL, {username: inputUsernameValue, password: inputPasswordValue})
            .then((res) => {
            console.log(res)
            setJwt(res.data.access)
            console.log("Response: " + res.data.access)
          })
          .catch(err => console.log(err))
          router.push('/')
      } catch (err) {
        console.log(err)
      }
  };

  return <div className="flex bg-white">
  <Head>
    <title>Login</title>
  </Head>

  <div
    className="h-screen bg-center bg-cover w-36"
    style={{
      backgroundImage: `url('https://media.wired.com/photos/5abece0a9ccf76090d775185/191:100/w_1280,c_limit/hangoutsscreen_2.jpg')`,
    }}
  ></div>
  <div className="flex flex-col justify-center pl-6">
    <div className="w-70">
      <h1 className="mb-2 text-lg font-medium">Login</h1>
      <p className="mb-10 text-xs">
        By continuing, you agree to our User Agreement and Privacy Policy
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="mb-2"
          type="text"
          value={inputUsernameValue}
          onChange={(e) => setinputUsernameValue(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          className="mb-4"
          type="password"
          value={inputPasswordValue}
          onChange={(e) => setInputPasswordValue(e.target.value)}
          placeholder="PASSWORD"
        />

        <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
          Login
        </button>
      </form>
      <small>
        New to Tider?
        <Link href="/register">
          <a className="ml-1 text-blue-500 uppercase">Sign Up</a>
        </Link>
      </small>
    </div>
  </div>
</div>
};

export default Login;