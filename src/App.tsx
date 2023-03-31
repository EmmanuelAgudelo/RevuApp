import { useEffect, useState } from "react";
import { Router } from "./router/Router"
import { Toaster } from 'react-hot-toast';
function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('offline', () => setOnline(false));
    window.addEventListener('online', () => setOnline(true));

    return () => {
      window.removeEventListener('offline', () => setOnline(false));
      window.removeEventListener('online', () => setOnline(true));
    };
  }, []);

  
  return online
  ?<>
    <Router/>
    <Toaster   position="bottom-center" />
  </>
  :<>No hay internet</>
}

export default App
