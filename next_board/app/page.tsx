import PostList from '../components/PostList';
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="">게시판</h1>
      <h2 className="">게시글 목록</h2>
      <PostList />
      <Link href={"/posts/new"}>
      <button>새 포스트 작성</button>
      </Link>
    </main>
  );
}