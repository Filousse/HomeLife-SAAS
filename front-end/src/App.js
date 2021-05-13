import React, { useEffect } from "react";
import './App.css';
import api from "./api/db";

function App() {

  useEffect(() => {
      const getDb = async () => {
        const response = await api.get("/residents");
        console.log("=== DATA =>", response.data)
        return response.data;
      };
    getDb();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      Home life
      </header>
    </div>
  );
}
export default App;
