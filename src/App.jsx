import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { receiveToDo } from './store/todos';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(receiveToDo(e.target.todo.value));
    e.target.todo.value = ''
    e.target.todo.focus();
    return false
  }

  return (
    <>
      <h1>To Dos</h1>
      <div id='todos-container'>
        <ul id='todos-list'>
          {Object.keys(todos).map((key, i) => {
            return( 
              <li key={i}>
                {todos[key]}
              </li>
          )})}
        </ul>
        <form onSubmit={handleSubmit} action=''>
          <label htmlFor={'todo'}>
            <input type='text' name='todo' id='todo'></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
