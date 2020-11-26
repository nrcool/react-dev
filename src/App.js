import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./components/Wrapper";
import Axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";
import Recipe from "./components/Recipe";

export default function App() {
  const [data, setData] = useState([]);
  const [searchValue, setsearchValue] = useState("chicken");

  useEffect(() => {
    //componentDidMount
    /* this will code execute only once */
    getData();
  }, []);

  const getData = () => {
    Axios.get(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    ).then((result) => setData(result.data.hits));

    /*  fetch(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
       setData(result.hits) 
      }); */
  };

  const searchData = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="container bg-dark text-white">
              <h1>Recipe APP</h1>
              <form className="text-right" onSubmit={searchData}>
                <label>
                  Search Recipe:{" "}
                  <input
                    type="text"
                    onChange={(e) => setsearchValue(e.target.value)}
                  />
                </label>
                <input type="submit" value="search" />
              </form>
            </div>

            <Wrapper data={data} />
          </div>
        </Route>
     {/*    <Route path="/recipe/:productname" render= { (props)=> <Recipe {...props} data={data}/> }/> */}
     <Route path="/recipe/:productname" component={Recipe}/>
        
      </Switch>
    </HashRouter>
  );
}
