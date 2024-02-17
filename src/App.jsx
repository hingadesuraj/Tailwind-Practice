import { useEffect } from "react";
import "./App.css";
import { Client } from "pg";


function App() {

  // const client = new Client({
  //   host: 'URL',
  //   port: 5334,
  //   database: 'newDB',
  //   user: 'user',
  //   password: "password",
  // })
  
  // client.connect();


  const client = new Client({
    connectionString: "postgreURL"
  })
  
  async function createUsersTable() {
      await client.connect()
      const result = await client.query(`
          CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
      `)
      console.log(result)
  }
  useEffect(()=>{

    createUsersTable();
  },[])



  return (
    <>
      <h1>Hello from react implement postgreSQL Database</h1>
    </>
  );
}

export default App;
