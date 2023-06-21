import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then((posts) => setData(posts.slice(0,10)));
     
      
     
  }, []);
  console.log(data);
  return (
    <div className="App">
      {data.map((post) => (
        <div >
          <h1 style={{ backgroundColor: "#eab676" }} >{post.title}</h1>
          <h3 style={{ backgroundColor: "#91b4bd" }}>{post.body}</h3>
        </div>
      ))}
    </div>
  );
}
