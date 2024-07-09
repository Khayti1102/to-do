const AddTaskForm =({ newTask, setNewTask, addTask  }) =>{
    return(

        <>
          {/* Add task */}
          <br />
          <div className="row">

            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}

                className="form-control from-control-lg" />
            </div>

            <div className='col-auto'>
              <button className='btn btn-lg btn-success'
                onClick={addTask}
              >
                Add Task
              </button>
            </div>

          </div>


        </>

    )


}

export default AddTaskForm;