import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import NotFound from './pages/NotFound';
import { SignUpPage } from './pages/SignUpPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
