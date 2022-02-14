import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import TodoDetail from './components/TodoDetail';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const todoList = useSelector(state => state);
  return (
    <div className="App m-5">
      <Routes>
        <Route path="/" element={<TodoList />} />
        {todoList.map((todo) => { return <Route path={todo.id} element={<TodoDetail todo={todo} />} key={todo.id} /> })}
      </Routes>
    </div>
  );
}

export default App;
