import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
  return (
    <header className="flex justify-center h-screen items-center flex-col gap-4 p-4 bg-gradient-to-b from-gray-900 to-neutral-800 shadow">
      <SigninButton />
    </header>
  );
};

export default Appbar;
