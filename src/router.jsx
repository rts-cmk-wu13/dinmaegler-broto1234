import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Boliger from './pages/Boliger.jsx';
import Maeglere from './pages/Maeglere.jsx';
import Kontakt from './pages/Contack.jsx';
import NotFound from './pages/NotFound.jsx';
import Favoritter from './pages/Favoritter.jsx';
import { agentsLoader, boligLoader, combinedLoader, DetailBoligLoader } from './components/utilites/loderData.js';
import Loading from './components/Loading.jsx';
import DetailBolig from './pages/DetailBolig.jsx';


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
        element: <Boliger />,
        loader: boligLoader
      },
      {
        path: 'homes/:id',
        element: <DetailBolig />,
        loader: DetailBoligLoader,
      },
      {
        path: 'maeglere',
        element: <Maeglere />,
        loader: agentsLoader
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
