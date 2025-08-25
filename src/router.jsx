import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Boliger from './pages/Boliger.jsx';
import Maeglere from './pages/Maeglere.jsx';
import NotFound from './pages/NotFound.jsx';
import Favoritter from './pages/Favoritter.jsx';
import { agentsLoader, boligLoader, combinedLoader, detailAgentLoader, detailBoligLoader } from './components/utilites/loderData.js';
import Loading from './components/Loading.jsx';
import DetailBolig from './pages/DetailBolig.jsx';
import DetailAgent from './pages/DetailAgent.jsx';
import Contact from './pages/Contact.jsx';
import handleSubmit from './components/utilites/actions.js';
import { ErrorBoundary } from './components/Error.jsx';
import LogIn from './pages/LogIn.jsx';
import RequireAuth from './components/RequireAuth.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    hydrateFallback: <Loading />,
    errorElement: <ErrorBoundary />,
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
        loader: detailBoligLoader
      },
      {
        path: 'maeglere',
        element: <Maeglere />,
        loader: agentsLoader
      },
      {
        path: 'agents/:id',
        element: <DetailAgent />,
        loader: combinedLoader,
        action: handleSubmit
      },
      {
        path: 'favoritter',
        element: (
          <RequireAuth>
            <Favoritter />
          </RequireAuth>
        ),
      },
      {
        path: 'kontakt',
        element: <Contact />,
        action: handleSubmit
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
])

export default router;
