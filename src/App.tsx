import { Provider } from 'react-redux';

// Utils
import store from './redux/store';

// Components
import TopBar from './components/TopBar';
import ProductDataView from './components/ProductDataView';

import './App.css';

function App() {
  // Render webpage to display product data from provided JSON
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <ProductDataView />
      </div>
    </Provider>
  );
}

export default App;
