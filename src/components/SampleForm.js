import { useState } from "react";

function SampleForm () {
  const [username, setUsername] = useState('')
  const [errors, setErrors] = useState([])

  const validate = (username) => {
    const updateErrors = []
    
    if (username.length === 0) {
      updateErrors.push(`Username can't be empty`) 
    }

    setErrors(updateErrors)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    
    validate(username)

    if (errors.length > 0) {
      return
    }

    console.log(`Submitting form for ${username}`)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label>username</label>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <span style={{ color: 'red' }}>{errors}</span>
      <input type="submit" />
    </form>
  )
}

export default SampleForm
