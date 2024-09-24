import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Students from '../pages/Students';
import CreateStudent from '../pages/CreateStudent';
import Test from '../pages/Test';
import ReduxTest from '../pages/ReduxTest';
import CategoriesRedux from '../pages/CategoriesRedux';
import ListProducts from '../pages/ListProducts';
import AddProduct from '../pages/AddProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/students',
    element: <Students />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/redux',
    element: <ReduxTest />,
  },
  {
    path: '/categories',
    element: <CategoriesRedux />,
  },
  {
    path: '/products/create',
    element: <AddProduct />,
  },
  {
    path: '/products/list',
    element: <ListProducts />,
  },
  {
    path: '/students/create',
    element: <CreateStudent />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
