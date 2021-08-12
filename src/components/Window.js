function Window (props) {
  const { textValue } = props
  return (
    <div
      style={{
        flex: 1,
        width: '95%',
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'column', 
      }}
    >
      {textValue}
    </div>
  )
}

export default Window
