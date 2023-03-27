import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch(process.env.PUBLIC_URL + '/config.json')
      .then(response => response.json())
      .then(data => {
        fetch(data.apiUrl)
          .then(res => res.json())
          .then((data) => setUsers(data));
      });
  }, [])


  return (
    <div className="App">
      <h4>UserName_Table...</h4>
      <div className='tableContainer'>

        <table border='2'>
          <thead>
            <tr>
              {/* <th>Name</th> */}
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => <tr>
              {/* <td>{data.name}</td> */}
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>)}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;