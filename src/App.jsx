import { Suspense } from 'react';
import AuthContextProvider from './contexts/AuthContext';
import Router from './route';
import { Slide, ToastContainer } from 'react-toastify';

function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
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
