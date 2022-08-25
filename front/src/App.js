import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/card';

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState([]);

  console.log(listGames);
  const handleChangeValues = ({ target }) => {
    const { name, value } = target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  useEffect(() => {
    Axios.get('http://localhost:3001/getCards').then((response) => {
        setListGames(response.data)
    })
}, [listGames])
  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
     setListGames([...listGames, {
      name: values.name,
      cost: values.cost,
      category: values.category,
     }])
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getCards').then((response) => {
      setListGames(response.data);
    });
  }, []);
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Star Game</h1>
        <input
          onChange={handleChangeValues}
          type="text"
          name="name"
          className="register-input"
          placeholder="Name"
        />
        <input
          onChange={handleChangeValues}
          type="number"
          name="cost"
          className="register-input"
          placeholder="Cost"
        />
        <input
          onChange={handleChangeValues}
          type="text"
          name="category"
          className="register-input"
          placeholder="Category"
        />
        <button
          type="button"
          onClick={() => handleClickButton()}
          className="register-button"
        >
          Register
        </button>
      </div>
      {listGames.map((item) => (
        <Card
          key={item.id}
          listGames={listGames}
          setListGames={setListGames}
          id={item.id}
          name={item.name}
          cost={item.cost}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default App;
