import Window from './Window'
import Input from './Input'


function ChatBox ({
  isChatBoxShown,
  chatId,
  textValue,
  setTextValue,
}) {

  return(
    <div style={!isChatBoxShown ? {
      display: 'hidden',
    } : {
      border: '1px solid black', 
      width: '500px', height: '700px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>ChatBox</h1>
      <Window textValue={textValue} />
      <Input chatId={chatId} setTextValue={setTextValue} textValue={textValue} />
    </div>
  )
}

export default ChatBox
