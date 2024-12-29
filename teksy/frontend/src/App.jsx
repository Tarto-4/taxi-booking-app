import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '@contexts/AuthContext';
import { BookingProvider } from '@contexts/BookingContext';
import { Toaster } from '@/components/ui/toaster';
import AppRoutes from '@/routes';
import Layout from '@components/layout/Layout';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <Layout>
            <AppRoutes />
          </Layout>
          <Toaster />
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
