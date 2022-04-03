import React from 'react'
import styles from './styles.module.css';
const Card = ({ listTodo, setListTodo }) => {
  // console.log('dari card', listTodo);
  const handleChecked = (value, key) => {
    const newListTodo = listTodo.map((todo, todoIdx) => {
      if (todoIdx === key) {
        return {
          ...todo,
          checked: value,
        };
      }
      return todo;
    });
    setListTodo(newListTodo);
  };

  const deleteTodo = (index) => {
    console.log(index);
    const newListTodo = listTodo.filter((todo, todoIdx) => {
      if (todoIdx !== index) {
        // return selain card yang dipilih
        return {
          todo
        };
      }
      return false;
    })
    setListTodo(newListTodo)
  }
  return (
    <div className={styles.card}>
      {
        listTodo.map((todo, todoIdx) => {
          return (
            <div className={styles.card_box} key={todoIdx}>
              <div className={styles.todo_list}>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={(e) => handleChecked(e.target.checked, todoIdx)}
                />
                <div className={todo.checked ? styles.check : styles.uncheck}>{todo.todo}</div>
              </div>
              {/* panggil deleteTodo jika onClick */}
              <button onClick={() => deleteTodo(todoIdx)}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card;