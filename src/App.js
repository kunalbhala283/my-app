import logo from './logo.svg';
import './App.css';
import Header from './components/Headers';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import {routes} from './routes'
import { useRoutes } from 'react-router-dom';
function App() {
  const appRoute = useRoutes(routes)
  return (

   <div>
     <Header/>
     {appRoute}
   </div>
  );
}

export default App;
