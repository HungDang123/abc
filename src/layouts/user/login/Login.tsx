import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
const Login: React.FC = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const loginRequest = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:8080/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });
      const responseData = await response.json();

      const message = responseData.message;
      if (response.status === 200) {
        const user = responseData.data;
        console.log(user);
        localStorage.setItem("login", user);
        setAuth(user);
        setIsLoggedIn(true)
        navigate("/")
        toast.success(message);
      } else {
        throw new Error("Username or password incorrect");
      }
    } catch (error) {
      console.error(error);
      toast.error("Tài khoản hoặc mật khẩu không chính xác");
    }
  };

  return (
    <div className="container p-10 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-7">
        <form>
          <h1 className="mb-7">Đăng nhập</h1>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="form-label" htmlFor="username">
                  Tên đăng nhập *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="username"
                  type="text"
                  placeholder="Your username"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Mật khẩu *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  title="Minimum 6 characters at 
                                    least 1 Alphabet and 1 Number"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" id="remember" type="checkbox" />
            <label
              className="form-check-label fs-sm"
              data-bs-toggle="collapse"
              htmlFor="remember"
            >
              Nhớ mật khẩu?
            </label>
          </div>
          <button className="btn w-100 btn-dark" onClick={handleLogin}>
            Đăng nhập
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};
export default Login;
