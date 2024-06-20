'use client'

import PostForm from "@/components/PostForm";
import { editPost } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function EditPost({params :{id},} : {params: {id : number}}) {
    const router = useRouter()
    const handleSubmit = (data : any) => {
        data.id = id;
        editPost(data);
        alert("제출완료");
        router.push("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>편집</h1>
      <PostForm onSubmit = { handleSubmit } />
    </main>
  );
}
