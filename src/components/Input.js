import { useState } from 'react'

function Input ({ chatId, setTextValue, textValue }) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target: { value }}) => {
    setInputValue(value)
  }

  const onSendButtonClick = () => {
    setTextValue([
      ...textValue,
      <div key={textValue.length + 1} style={{ width: '100%', display: 'flex', justifyContent: chatId }}>{inputValue}</div>
    ])
    setInputValue('')
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      onSendButtonClick()
    }
  }

  return (
    <section 
      style={{ 
        border: '1px solid black',
        display: 'flex', 
        padding: '20px',
        justifyContent: 'space-between'
      }}>
      <input
        onKeyPress={onKeyPress}
        onChange={onInputChange} 
        placeholder="Type a message"
        type="text"
        style={{
          height: '50px',
          fontSize: '24px'
        }}
        value={inputValue}
      />
      <button 
        type="button"
        onClick={onSendButtonClick}
        style={{ width: '100px' }}>Send</button>
    </section>
  )
}

export default Input
