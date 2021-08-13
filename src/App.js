
import { useState } from 'react'
import ChatBox from "./components/ChatBox";

function App() {
  const [isChatBoxShown, setIsChatBoxShown] = useState(true)
  const [textValue, setTextValue] = useState([])
  const style = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }

  const onToggleButtonClick = () => setIsChatBoxShown(!isChatBoxShown)

  console.log({
    isChatBoxShown,
  })

  return (
    <>
      <div className="App" style={style}>
        <ChatBox // 1
          chatId="flex-start"
          textValue={textValue} 
          setTextValue={setTextValue} 
          isChatBoxShown={isChatBoxShown}  
        />
        <ChatBox // 1
          chatId="flex-end"
          textValue={textValue} 
          setTextValue={setTextValue} 
          isChatBoxShown={isChatBoxShown}  
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button onClick={onToggleButtonClick}>Hide!</button>
      </div>
    </>
  );
}

export default App
