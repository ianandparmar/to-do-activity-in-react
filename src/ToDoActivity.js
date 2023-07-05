import React, { useState } from 'react'

function ToDoActivity() {
       const [activity, setActivity] = useState("");
       const [listData, setListData] = useState([]); 
       console.log("activity",activity);

       function addActivity() {
              // setListData([...listData, activity]);
              // console.log("listData", ...listData);
              setListData((listData)=>{
                     const updatedList = [...listData, activity]
                     console.log(updatedList);
                     setActivity('');
                     return updatedList
              })
       }
       function removeActivity(i) {
              const updatedListData = listData.filter((ele, id)=>{
                     return i!==id;
              })
              setListData(updatedListData);
       }
       function removeAll() {
              setListData([]);
       }
  return (
       <>
       <div className='container'>
              <div className='header'>To do activity</div>
              <input type="text" placeholder='enter your activity' value={activity} onChange={(e)=>setActivity(e.target.value)} />
              <button onClick={addActivity} >Add</button>
              <p className='List-heading'>Here is your list :{')'} </p>
              {listData !==[] && listData.map((data, i)=>{
                      return(
                            <>
                            <p key= {i}>
                                   <div className='listData'>{data}</div>
                                   <div><button onClick={()=>removeActivity(i)} className='btn-position'>Remove(-)</button></div>
                            </p>
                            </>
                      )
              })}
              {listData.length>= 1 && <button onClick={removeAll}>Remove All</button>}
              
       </div>
       </>
  )
}

export default ToDoActivity