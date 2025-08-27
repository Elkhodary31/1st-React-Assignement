
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './pages/MainLayout/MainLayout'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';


function App() {

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },{
        path:"Portfolio" ,
        element:<Portfolio/>
      },
      {path:"Contact", element: <Contact/>},

      {path:"*",element:<NotFound/>},
    ]
  }
]);

  return <>
  <RouterProvider router={routes} />
  </>
}

export default App
