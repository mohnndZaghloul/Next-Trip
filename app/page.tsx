"use client";

import { Button } from "@/components/ui/button";
import { signInByGoogle } from "@/lib/auth-client";

const signInHandler = async () => {
  await signInByGoogle();
};

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center text-5xl">
      <h1 className="font-heading">My Heading</h1>
      <p className="font-sans">My paragraph text</p>
      <Button onClick={signInHandler}>sign up with google</Button>
    </main>
  );
}
