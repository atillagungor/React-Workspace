import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'

function App() {

  const dispatch = useDispatch()
  const { value } = useSelector((store) => store.counter)
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <UserList />
      </div>
    </div>
  )
}

export default App