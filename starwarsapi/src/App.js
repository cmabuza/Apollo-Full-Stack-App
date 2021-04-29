import React, { useState,useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import People from "./components/People";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader} from 'semantic-ui-react';


function App() {
  const [people, setPeople ] = useState([]);
  // for when we fetch data from the api - we want to show that
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    // async function fetchHomeworld() {
    //   let res = await fetch('https://swapi.dev/api/planets/');
    //   let data = await res.json();
    //   setHomeworld(data.results);
    // }
    fetchPeople();
    // fetchHomeworld();
    
  }, [])

  console.log("data", people);
  // console.log("data", homeworld);

  return ( 
  <>
  <Router>
    <Navbar/>
    <Container>
      { loading ? (
        <Dimmer active inverted>
          <Loader inverted> Loading ... </Loader>
        </Dimmer>
      ) : (
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/people'> 
            <People data={people}/>
            {/* <Homeworld data={homeworld}/> */}
           </Route>
        </Switch>
      )}
        
    </Container>
  </Router>
    
  </> );
}

export default App;
