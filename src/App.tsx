import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Voucher from './pages/Voucher';
import Search from './pages/Voucher/Search';
import Reclamation from './pages/Reclamation';
 

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"voucher",
      element: <Voucher/>,
    // {
    //   path:"/register",
    //   element: <Register/>
    // },
    // {
    //   path:"/dashboard",
    //   element: <Dashboard/>
    },
    {
      path:"voucher/search",
      element: <Search/>,
    },
    {
      path:"/reclamation",
      element: <Reclamation/>,
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
