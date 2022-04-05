import axios from "axios";

export async function fetchJson() {
  const { data } = await axios("http://localhost:3004/posts/");
  return data;
}
export async function fetchId(id) {
  const { data } = await axios(`http://localhost:3004/posts/${id}`);
  return data;
}
async function postJson() {
  let res = await axios.post("http://localhost:3004/posts/", {
    id: 4,
    title: "post 4",
    author: "gwegwgewg",
  });
  console.log(res.data);
}
