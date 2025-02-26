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
      <div className="flex flex-col justify-between h-screen overflow-y-hidden pt-3">
        <div className="name">
          <h1 className='text-3xl'>Chat-AI</h1>
        </div>

        <div className="output p-3">
          <p>{output}</p>
        </div>

        <div className="search flex justify-center gap-5">
          <textarea onChange={(e) => setInput(e.target.value)} value={input} className='rounded-4xl w-200 mb-5 h-12 px-4 py-2 text-[18px] bg-[#3d3d3a] border-0' placeholder='ask anything'></textarea>
          <button onClick={generateAns} className=' rounded-4xl p-2 h-13.5 bg-[#3d3d3a] text-[#a6a39a]' >send</button>
        </div>
      </div>
    </>
  )
}

export default App
