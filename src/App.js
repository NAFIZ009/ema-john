import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Main from './Layout/Main';

function App() {
  const router=createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<LandingPage/>
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
