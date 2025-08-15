import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Bolig from './pages/Bolig.jsx';
import Maeglere from './pages/Maeglere.jsx';
import Kontakt from './pages/Contack.jsx';
import NotFound from './pages/NotFound.jsx';
import Favoritter from './pages/Favoritter.jsx';
import { agentsLoader, boligLoader, combinedLoader } from './components/utilites/loderData.js';
import Loading from './components/Loading.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    hydrateFallback: <Loading />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: combinedLoader
      },
      {
        path: 'bolig',
        element: <Bolig />,
        loader: combinedLoader
      },
      {
        path: 'maeglere',
        element: <Maeglere />,
        loader: combinedLoader
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
