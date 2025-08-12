import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Bolig from './pages/Bolig.jsx';
import Maeglere from './pages/Maeglere.jsx';
import Kontakt from './pages/Contack.jsx';
import NotFound from './pages/NotFound.jsx';
import Favoritter from './pages/Favoritter.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'bolig',
        element: <Bolig />,
      },
      {
        path: 'maeglere',
        element: <Maeglere />,
      },
      {
        path: 'favoritter',
        element: <Favoritter />,
      },
      {
        path: 'kontakt',
        element: <Kontakt />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
])

export default router;
