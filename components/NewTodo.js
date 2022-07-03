import { useState } from 'react'
import supabase from '../utils/supabase'

export default ({ reload }) => {
  const [title, setTitle] = useState('')

  // eslint-disable-next-line react/display-name
  const addTodo = async (e) => {
    e.preventDefault()
    await supabase.from('todos').insert({ title })
    reload()
    setTitle('')
  }

  

  return (
    <form onSubmit={addTodo}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </form>
  )
}

addTodo.displayName = 'todo';
