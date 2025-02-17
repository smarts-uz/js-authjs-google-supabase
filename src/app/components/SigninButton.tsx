"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();

  console.log(session,'session');

  if (session && session.user) {
    return (
      <div className="flex gap-4 ">
        <p className="text-sky-600">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="text-red-400 border py-2 px-6 rounded bg-neutral-900"
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className=" text-green-400 border py-2 px-6 rounded bg-neutral-900"
    >
      Sign In
    </button>
  );
};

export default SigninButton;
