import React from 'react';
import Userfront from "@userfront/react";

Userfront.init("vndy4rvb");

const SignupForm = Userfront.build({
  toolId: "nkordkm"
});

export const SignUpPage = () => (
    <div className='signup'>
      <h1>This is the Sign Up Page</h1>
      <SignupForm />
    </div>
  );

export default SignUpPage;
