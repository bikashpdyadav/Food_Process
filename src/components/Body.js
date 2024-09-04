import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import Buy from './Buy';
import Sell from './Sell';
import Community from './Community';
import SignUp from './SignUp';
import Login from './Login';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/buy',
      element: <Buy />,
    },
    {
      path: '/community',
      element: <Community />,
    },
    {
      path: '/sell',
      element: <Sell />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
};

export default Body;
