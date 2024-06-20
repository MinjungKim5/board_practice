'use client'

// import { deletePost } from "@/lib/api";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { fetchPost } from "@/lib/api";

interface PostItemProps {
    post: {
      id: number;
      title: string;
      content: string;
    };
  }


const PostItem: React.FC<PostItemProps>= ({post}) => {
    // const router = useRouter();
    // const [post, setPost] = useState<any[]>([]);
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default PostItem;

