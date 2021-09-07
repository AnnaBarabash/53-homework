import '../css/App.css';
import BookList from './BookList';
import Title from './Title';
import { getBooks} from '../store/Book';


function App() {
  return (
    <div className="App">
      <Title title ='Library' />
      <BookList cards = {getBooks()} />        
    </div>
  );
}

export default App;
