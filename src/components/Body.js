import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import Buy from './Buy';
import Sell from './Sell';
import Social from './Social';
import Charts from './Charts';

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
      path: '/social',
      element: <Social />,
    },
    {
      path: '/sell',
      element: <Sell />,
    },
    {
      path: '/charts',
      element: <Charts />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
};

export default Body;
