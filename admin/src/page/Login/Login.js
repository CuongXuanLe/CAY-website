import { Link, useNavigate } from "react-router-dom";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { Logo } from "../../constants/images";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  });

  console.log({ name, password });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log({ name, password });
    const url = "http://127.0.0.1:8000/api/auth/login";
    axios
      .post(url, {
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert("Login successful");
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed");
        navigate("/login");
      });
  };

  return (
    <div className="relative h-screen bg-login bg-cover bg-center bg-no-repeat">
      <section className="flex h-screen items-center justify-center">
        <form className="h-auto w-1/3 rounded-lg border-2 border-black bg-blur px-10 py-5 font-medium text-white">
          <div className="flex items-end justify-center">
            <img
              className="h-full w-24 border border-black"
              src={Logo}
              alt="Logo"
            />
            <p className="ml-6 text-lg tracking-[.2em]">
              CAY <br /> STUDIO
            </p>
          </div>
          <div className="my-2">
            <label>Email</label>
            <div className="mt-2 flex grow items-center rounded-lg bg-blur px-3">
              <BiEnvelope />
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="form-control text-md m-0 block w-full bg-transparent px-4 py-2 font-normal outline-none"
                id="loginPassword"
                placeholder="Enter your email"
                maxLength={64}
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label>Password</label>
            <div className="mt-2 flex grow items-center rounded-lg bg-blur px-3">
              <BiLockAlt />
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                className="form-control text-md m-0 block w-full bg-transparent px-4 py-2 font-normal outline-none"
                id="loginPassword"
                placeholder="Enter your password"
                maxLength={100}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <Link to="/">
              <input
                type="submit"
                className="text-md inline-block w-full rounded bg-black px-7 py-3 font-bold uppercase leading-snug tracking-wide shadow-md hover:bg-white hover:text-black focus:outline-none"
                onClick={handleSubmit}
              />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
