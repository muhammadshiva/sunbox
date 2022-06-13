import { Route, Routes } from 'react-router-dom'
import Layouts from '../../components/Layouts';
import Home from './pages/Home';

function AuthPage() {
  return (
    <Layouts>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Layouts>
  );
}

export default AuthPage;
