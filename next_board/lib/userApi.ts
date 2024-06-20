export async function login(data: { user_id: string; password: string}) {
    const res = await fetch('http://jungle5105.xyz:8887/user/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    });
    return res.json();
}