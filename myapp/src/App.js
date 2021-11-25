
const App = () =>  {

  const city = "New Delhi"

  // const styles = {
  //   width: "500px",
  //   border: "10px solid red"
  // }
  
  //Dynamic addition of style
  let styles
  if (city === "Paris") {
    styles = {
      width: "600px",
      border: "10px solid red"
    }
  }
  else{
    styles = {
      width: "600px",
      border: "10px solid black"
    }
  }

  const action = () => {
    console.log("I'm clicked")
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="container">

        <h3>{city}</h3>

        {/* Inline styling in jsx */}
        <img style={styles} src="https://media.istockphoto.com/photos/tokyo-cityscape-aerial-view-picture-id1278304139?b=1&k=20&m=1278304139&s=170667a&w=0&h=Zj3AqlA67R9saNsuJGXHuj6ROqSn0gc_mtiVbd5BBAo=" alt="" />

        <button onClick = {action} >Click Me!</button>

      </div>

      <footer>
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </footer>
      
    </div>
  );

}

export default App;
