import React, { createContext, useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = 'Hacker Dormitory';
export const AppContext = createContext({
  error: null,
  residents: [],
  addResident: () => {},
  setError: () => {},
});
function App() {
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState(null);
  const addResident = (resident) => {
    setResidents([...residents, resident]);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ residents, error, addResident, setError }}>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
          <Search />
          <Error />
          <ResidentsList />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
