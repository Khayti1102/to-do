import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import UpdateForm from './components/UpdateForm.jsx';


import './App.css';

function App() {
  // tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  //Temp State 
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //////////////////////////////////////////////////////////////////////////////////////////////

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  const cancelUpdate = () => {

    setUpdateData('');
  }


  //////////////////////////////////////////////////////////////////////////////////////////////

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////


  const updatetask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}


      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updatetask={updatetask}
          cancelUpdate={cancelUpdate}
        />
      ) : (

        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

      )}



      {/* /////////////////////////////////////////////////////////////////////////////////////// */}


      {/* Display ToDos */}
      {toDo && toDo.length ? '' : 'No Tasks...'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}

      />



    </div >
  );
}

export default App;
