import { useEffect, useState } from "react";
import { useRef } from "react"
import Input from "./Input";

function App() {

  const inputRef = useRef(null);

  const [liCount, setLiCount] = useState([]);

  const [list, setLisit] = useState([
    'hello',
    'one'
  ]);






  useEffect(() => {
    inputRef.current.style.borderColor = 'red';

    setLiCount(document.querySelectorAll('li'));


  }, []);


  const handleAdd = () => {
    setLisit([
      ...list,
      inputRef.current.value,
    ])

    inputRef.current.value = '';
  }

  return (
    <div>
      <Input ref={inputRef} onAdd={handleAdd} />
      <br />
      <br />
      <ul>
        {list.map((i, index) => <li key={index}>{i}</li>)}
      </ul>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )

}





export default App
