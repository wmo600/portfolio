import { BrowserRouter as Router } from 'react-router-dom';
import VSCodeShell from './components/VSCodeShell';
import AppRouter from './router/AppRouter';

const App = () => (
  <Router>
    <VSCodeShell>
      <AppRouter />
    </VSCodeShell>
  </Router>
);

export default App;
