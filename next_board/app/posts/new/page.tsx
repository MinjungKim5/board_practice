'use client'

import PostForm from "@/components/PostForm";
import { createPost } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function NewPost() {
    const router = useRouter()
    const handleSubmit = (data : any) => {
    createPost(data);
    alert("제출완료");
    router.push("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>새 포스트</h1>
      <PostForm onSubmit = { handleSubmit } />
    </main>
  );
}
