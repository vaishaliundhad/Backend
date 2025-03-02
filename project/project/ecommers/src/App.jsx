import './App.css';
import Layout from './pages/Layout';
import { CartProvider } from './context/Cartcontext';  // ✅ सही नाम से Import करें

function App() {
  return (
    <CartProvider>  {/* ✅ सही तरीके से इस्तेमाल करें */}
      <Layout />
    </CartProvider>
  );
}

export default App;
