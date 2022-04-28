import './App.css';
import Search from './components/Search';
import ContextProvider from './components/ContextProvider';
import BookMarkList from './components/BookMarkList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <Search />
        <BookMarkList perPage={5} />
      </div>
    </ContextProvider>
  );
}

export default App;
