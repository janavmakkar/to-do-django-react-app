import './App.css';
import Header from './components/Header'
import NotesList from './pages/NotesList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route exact path="/note/:id" element={<NotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
      
  );
}

export default App;
