'use client'

import { useRouter } from "next/navigation";
import { login } from "@/lib/userApi";
import LoginForm from "@/components/LoginForm";

export default function LogIn() {
    const router = useRouter()
    const tryLogin = (data : any) => {
    login(data);
    router.push("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>로그인</h1>
      <LoginForm onSubmit = { tryLogin } />
    </main>
  );
}
