
export const getPostItem = async (id) => {
    const con = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await con.json();

    return data;
}

