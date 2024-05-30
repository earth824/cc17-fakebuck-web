import { Suspense } from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Router from './route';
import { Slide, ToastContainer } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
        />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
