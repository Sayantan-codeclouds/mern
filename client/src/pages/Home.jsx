// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page.</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Home;
