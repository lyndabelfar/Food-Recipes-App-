import { useEffect, useState } from "react";
import Form from "./Form";
import Recipe from "./Recipe";

function App() {
  const appId = "43e9ab07";
  const appKey= "f4ea863183fd610a384a5bb28fec450b";
  const [query, setQuery] = useState('chicken');
  const [formSubmitNumber, setFormSubmitNumber] = useState(0)


  


  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`

  const [recipes, setRecipes] = useState([])
  
  const fetchData = async ()=> {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits)

  }

  useEffect(()=>{
    fetchData()
  } ,[formSubmitNumber])
  
  return (
    <>
      <Form value={query} setQuery={setQuery} formSubmitNumber={formSubmitNumber} setFormSubmitNumber={setFormSubmitNumber}/>
      <div className="recipes">
        {recipes.map((recipe)=>{
          return <Recipe recipe={recipe} />
        })}
      </div>
           
    </>
  );
}

export default App;
