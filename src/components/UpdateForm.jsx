const UpdateForm =({ updateData, changeTask, updatetask, cancelUpdate  }) =>{
    return(
        <>
         {/* Update task */}
          <div className='row'>

            <div className='col'>
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className='form-control from-control-lg' />
            </div>
            <div className='col-auto'>
              <button
                onClick={updatetask}
                className='btn btn-lg btn-success mr-20'>
                Update
              </button>
              <button
                onClick={cancelUpdate}
                className='btn btn-lg btn-warning'> Cancel</button>
            </div>

          </div>

        </>

    )


}

export default UpdateForm;