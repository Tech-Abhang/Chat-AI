import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [input,setInput] = useState("");
  const [output , setOutput] = useState("")

  async function generateAns(){
    console.log("loading ...")
    const responce = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCfEqeHtcT9-2eUO6hxtXybpBKA7DhruAc",
      method:"post",
      data:{"contents": [{"parts":[{"text": input}]}]}
    });
    setOutput(responce['data']['candidates'][0]['content']['parts'][0]['text']);
  }

  return (
    <>
      <div className="main">
        <div className="name">
          <h1>Chat-AI</h1>
        </div>

        <div className="output">
          <pre>{output}</pre>
        </div>

        <div className="search">
          <textarea onChange={(e) => setInput(e.target.value)} value={input} className='textarea'></textarea>
          <button onClick={generateAns}>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
