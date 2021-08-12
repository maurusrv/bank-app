
import { useState } from 'react'
import ChatBox from "./components/ChatBox";

function App() {
  const [textValue, setTextValue] = useState([])
  const style = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }

  return (
    <div className="App" style={style}>
      <ChatBox // 1
        chatId="flex-start"
        textValue={textValue} 
        setTextValue={setTextValue} />
      <ChatBox // 1
        chatId="flex-end"
        textValue={textValue} 
        setTextValue={setTextValue} />
    </div>
  );
}

export default App
