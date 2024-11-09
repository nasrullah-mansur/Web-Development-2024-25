import { useState } from "react";
import ChatBox from "./ChatBox";


function App() {
  const [isOpen, setIsOpen] = useState(true);

  const [text, setText] = useState('');




  return (
    <>
      <h1>News Feed Here</h1>
      <input type="text" className="border" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      {isOpen && <ChatBox />}

      <button className="border" onClick={() => setIsOpen(!isOpen)}>Chat Box</button>
    </>
  )

}

export default App;

