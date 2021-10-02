import {useEffect,useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  const[user,setUser] = useState('tomito26');
  const[userDetails,setUserDetails] = useState({});

  useEffect(() => {
    const getDetails = async () =>{
      const details = await fetchUser();
      setUserDetails(details);
    }
    
    getDetails()
  },[user]);
 

  const fetchUser = async () =>{
    const res = await fetch(`https://api.github.com/users/${user}`)
    const data = res.json()

    return data
  }

  const getUser = (newUser) =>{
    const user = newUser;
    setUser(user)
    

  }
  console.log(user)

  
  return (
    <div className="App">
     <SearchForm getUser={getUser} />
     <SearchResults userDetails={userDetails}/>
    </div>
  );
}

export default App;
