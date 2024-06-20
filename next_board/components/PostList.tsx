'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/api";

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
  
    useEffect(() => {
      async function loadPosts() {
        try {
          const data = await fetchPosts();
          setPosts(data);
        } catch (error) {
          console.error(error);
        }
      }
      loadPosts();
    }, []);
  
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default PostList;