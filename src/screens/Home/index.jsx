import React, { useState } from "react";
// import './App.css';
import Form from "../../components/Form";
import Header from "../../components/Header";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";


const Home = () => {
  const [inputs, setInputs] = useState({
    inputTodo: "",
  });
  const [listTodo, setListTodo] = useState([]);
  // console.log('ini input', inputs);
  // console.log('ini list', listTodo);
  // console.log(listTodo);
  return (
    <div className="App">
      <NavBar />
      <Header title="TodoList Ku" />
      <Form
        inputs={inputs}
        setInputs={setInputs}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <Card
        listTodo={listTodo}
        setListTodo={setListTodo}
      />

    </div>
  );
}

export default Home;
