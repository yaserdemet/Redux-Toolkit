import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);
  //* useSelector ile okuma use dispatch ile function calıstırlır.

  return user ? <Outlet /> : <Navigate to="/login" />;
  //? user varsa child componentleri getir yoksa login sayfasına gönder.
};

export default PrivateRouter;
