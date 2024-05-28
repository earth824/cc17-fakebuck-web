import Router from './route';
import { Slide, ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
    </>
  );
}

export default App;
