
import './App.css';

import Header from './Components/Header/Header'
import Posts from './Components/Posts/Posts';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="app full-height-grow">
     <header>
     <Header/>
     </header>
      
      
      <div className="body">
            <Posts/>
            <Profile/>
      </div>
    </div>
  );
}

export default App;
