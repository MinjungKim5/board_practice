'use client'

import { fetchPost } from "@/lib/api";
import PostItem from "@/components/PostItem";
import { deletePost } from "@/lib/api";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default async function PostDetail({params :{id},} : {params: {id : number}}){
    const router =  useRouter();
    const editUrl = "/posts/" + id + "/edit"
    const handleEdit = () => {
      router.push(editUrl);
    }

    const handleDelete =  () => {
      deletePost(id);
      alert("삭제!");
      // redirect("/");
     router.push("/");
    }
    
    const post = await fetchPost(id);
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Post #{id}</h2>
      <PostItem post = {post} />
      <button onClick={ handleEdit }>편집</button>
      <button onClick={ handleDelete }>삭제</button>
    </main>
  );
}
