"use client";

import { Button } from "@/components/ui/button";
import { signInByGoogle } from "@/lib/auth-client";

const signInHandler = async () => {
  await signInByGoogle();
};

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center text-5xl">
      <Button onClick={signInHandler}>sign up with google</Button>
    </main>
  );
}
