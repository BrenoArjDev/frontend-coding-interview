import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";
import Logo from "../../assets/imgs/logo.svg";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      login(username);
      navigate("/photoGallery");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} className="header-logo" />
        <h2 className="header-title">Sign in to your account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div style={{ paddingBottom: 8 }}>
            <label className="input-label">Username</label>
          </div>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="testing@testing.com"
            className="input-field"
          />
        </div>
        <div style={{ marginTop: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <label className="input-label">Password</label>
            <a className="forgot-password">Forgot password?</a>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div>
          <button type="submit" className="login-button">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
