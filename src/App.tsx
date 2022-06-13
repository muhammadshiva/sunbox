import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoggedInPage } from './modules/LoggedIn';
import Join from './modules/Auth/Join';
import Login from './modules/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoggedInPage />} />
          <Route path="auth" >
            <Route index element={<Join />} />
            <Route path="login" element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
