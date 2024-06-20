import exp from "constants";

export async function fetchPosts() {
    try {
      console.log("fetch OK");
      const res = await fetch("http://jungle5105.xyz:8887/posts/");
      if (!res.ok) {
        throw new Error("서버 요청 실패!");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

export async function fetchPost(id: number) {
    const url = "http://jungle5105.xyz:8887/posts/" + id;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}

export async function deletePost(id: number) {
    const url = "http://jungle5105.xyz:8887/posts/" + id;
    const res = await fetch(url, {
        method: 'DELETE'
    });
    return;
}

export async function createPost(data: { title: string; content: string}) {
    const res = await fetch('http://jungle5105.xyz:8887/posts', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function editPost(data: {id: number; title: string; content: string}) {
  const res = await fetch('http://jungle5105.xyz:8887/posts', {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
  });
  return res.json();
}

// export async function getID() {
//   try {
//     const res = (await fetch('http://localhost:5555/myid')).json();
//     if (res.user_id != "") return res.user_id;
//     else return null;
//   } catch(e) {return null;} 
// }