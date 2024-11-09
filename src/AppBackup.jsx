import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [text, setText] = useState('');

  return (
    <>
      <button className="border p-2 font-bold" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      <br />
      <input onChange={(e) => setText(e.target.value)} type="text" className="border" value={text} />

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )

}

export default App;

