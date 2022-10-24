import { Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import { Home } from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  )
}

export default App;

