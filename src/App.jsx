import { useRef } from "react"
import Input from "./Input";

function App() {

  const inputRef = useRef(null);



  return (
    <div className="my-bg h-[200px]">

      <Input ref={inputRef} />


    </div>
  )
}





export default App
