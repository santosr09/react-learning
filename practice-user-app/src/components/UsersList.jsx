import React from "react";

const UsersList = (props) => {
  //console.log("age: "+props.items[0].age);
  
  return (
    <div>
      {
        props.items.map((item) => {
          return (
            <div key={item.id}>
          <label >{item.username} {item.age}</label>
          </div>
          );
        })
      }
      
    </div>
  );
  
}

export default UsersList;