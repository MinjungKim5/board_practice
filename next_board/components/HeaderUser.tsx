// import { getID } from "@/lib/api";
import Link from "next/link";

export default async function Header() {
    // let myid = getID();
    // if (myid =! null) return (
    //     <Link href={"/mypage"}>
    //         {myid} 님
    //     </Link>
    // );
    // else {}
        return(
        <Link href={"/login"}>
        <button>로그인 하세요</button>
        </Link>
        );
    // }
}