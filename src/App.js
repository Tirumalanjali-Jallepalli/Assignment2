//import logo from './logo.svg';
//import './App.css';
//import React from 'react';


//const DictionaryList = () => {
 //const [dictionaryList] = React.useState([
   // { key: 'Key1', value: 'Value1' },
  // { key: 'Key2', value: 'Value2' },
   // { key: 'Key3', value: 'Value3' },
 //]);

// return (
   // <ul>
      //</ul>{dictionaryList.map((dictionary, index) => (
        //<li key={index}>
         // {dictionary.key}: {dictionary.value}
       // </li>
      //))}
    //</ul>
 //);
//};

//export default DictionaryList;

// function Array({ years }) {
//   return (
//      <select>
//        {years.map((year) => (
//          <option key={year.value} value={year.value}>
//            {year.label}
//          </option>
//        ))}
//      </select>
//   );
//  }
 
//  export default Array;
 
//  import React from 'react';



// function Array({ months }) {
//  return (
//     <select>
//       {months.map((month) => (
//         <option key={month.value} value={month.value}>
//           {month.label}
//         </option>
//       ))}
//     </select>
//  );
// }

// export default Array;


// import React, { useState } from "react";
// import List from "./list";
// import styles from "./styles.css";

// function App() {
//   const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
//   const [inputValue, setInputValue] = useState("");

//   const handleDeleteItem = (index) => {
//     const newItems = items.filter((_, itemIndex) => itemIndex !== index);
//     setItems(newItems);
//   };

//   const handleEditItem = (index, newValue) => {
//     const newItems = items.map((item, itemIndex) => {
//       if (itemIndex === index) {
//         return newValue;
//       }
//       return item;
//     });
//     setItems(newItems);
//   };

//   const handleAddItem = () => {
//     if (inputValue.trim()) {
//       setItems([...items, inputValue]);
//       setInputValue("");
//     }
//   };

//   return (
//     <div>
//       <div className={styles.addItemContainer}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a new item"
//           className={styles.addItemInput}
//         />
//         <button
//           onClick={handleAddItem}
//           className={`${styles.button} ${styles.addItemButton}`}
//         >
//           Add Item
//         </button>
//       </div>
//       <List
//         items={items}
//         onDeleteItem={handleDeleteItem}
//         onEditItem={handleEditItem}
//       />
//     </div>
//   );
// }

// export default App;


import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Name from './Name';
import Login from './login';
import './App.css';
import { useEffect,useState } from 'react';

function App(){
  const[loggedIn,setLoggedIn]=useState(false)
  const[email,setEmail]=useState("")

  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Name email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;