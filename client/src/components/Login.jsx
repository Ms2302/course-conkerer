import React from "react";
import Userfront from "@userfront/react";

Userfront.init("vndy4rvb");

const LoginForm = Userfront.build({
  toolId: "mlarblm"
});

export const LoginPage = () => (
    <div className="loginPage">
      <h1>This is the Login Page</h1>
      <LoginForm />
    </div>
  );

export default LoginPage;
