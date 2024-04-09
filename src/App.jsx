import { useState } from 'react'

function App() {
  
  const [list,setList] = useState([]);
  const [item,setItem] = useState('');

  const handleAddTask = (e) => {
    list.push(item);
    setList([...list]);
    console.log('List : ',list);
  }

  const handleRemoveTask = (index) => {
    list.splice(index,1);
    setList([...list]);
  }

  return (
    <>
      <div className='text-500-red my-5 mx-5'>Simple REACT TODO App</div>
      <div className=''>
        <table className='table-auto'>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input placeholder='New Task' onChange={(e) => setItem(e.target.value)} /></td>
              <td><button onClick={handleAddTask}>Add</button></td>
            </tr>
            {
              list.length == 0 ? '' : list?.map((item,index) => {
                return (
                  <tr key={index}>
                    <td>{item}</td>
                    <td><button onClick={() => handleRemoveTask(index)}>Remove</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
