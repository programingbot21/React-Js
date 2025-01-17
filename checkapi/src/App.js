import { getPosts } from './Fecth/Fecth';
import './App.css';
import { useEffect} from 'react'


function App() {
  return (
    useEffect(() => {
      getPosts().then((posts) => console.log(posts))
    }, [])

  
  
     )
    
    
    
  
  }

export default App;
