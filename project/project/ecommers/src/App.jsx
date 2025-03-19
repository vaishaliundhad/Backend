import './App.css';
import Layout from './pages/Layout';
import { CartProvider } from './context/Cartcontext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Layout />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
