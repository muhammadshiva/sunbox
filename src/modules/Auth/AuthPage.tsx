import { Route, Routes } from 'react-router-dom'
import Join from './Join';

function AuthPage() {
  return (
      <Routes>
          <Route path="/auth" element={<Join />} />
      </Routes>
  );
}

export default AuthPage;
