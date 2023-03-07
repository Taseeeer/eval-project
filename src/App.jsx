import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Cart from './pages/Cart'
import Products from './pages/Products'

function App() {
  const AppRoutes = () => {
    const routes = useRoutes([
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]);

    return routes;
  }

  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
