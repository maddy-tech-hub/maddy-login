import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
console.log('auth remote mounted');
root.render(<App />);
