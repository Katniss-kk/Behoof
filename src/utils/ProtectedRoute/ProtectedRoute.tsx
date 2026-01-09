import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, loading } = useSelector((state: RootState) => state.User);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Проверка авторизации...
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;