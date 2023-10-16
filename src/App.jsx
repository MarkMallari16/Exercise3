import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import CategoryComponent from './components/CategoryComponent';
import './App.css'
import MovieLists from './components/MovieLists';
function App() {


  return (
    <div className="app text-white">
      <NavComponent/>
      <CategoryComponent/>
      <MovieLists/>
    </div>
  )
}

export default App
