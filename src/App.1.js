import { useState, useEffect } from 'react';

export function App() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");
  const [button, setbtn] = useState("");

  function setNew(event) {
    const value = event.target.value;
         setname(value)
    
  }
  function setAnother() {
    setbtn(name);
    setname("")
  }

  let today = new Date();
  let currentDay = today.getFullYear();

  const random = Math.floor(Math.random() * 2) + 1;

  console.log(random);

  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 100);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <form>
        <input className='form' type="text" name={name} value={name} onChange={setNew} />
        <p>{button}</p>

        <button onClick={setAnother} className= "header">Add</button>
        </form>
        <p>
          love <span className="heart">♥️</span> count
        </p>
        <h3>{count}%</h3>


        <footer>

          <p className="small">


            copy {currentDay}
          </p>
        </footer>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}
