import React from 'react';
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './pages/home';



const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;