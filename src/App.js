import React from 'react';
import{
  createBrowserRouter,
  RouterProvider, 
  Route
} from "react-router-dom";
import './App.css';
import restaurant from './pages/options';
import Home from './pages/home';



const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  },
  {
    path:"/dance/:id",
    element: <restaurant />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;