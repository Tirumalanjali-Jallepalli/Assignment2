 //import React from "react";
 //import ReactDOM from 'react-dom';
 //import Name from './Name';
//import './index.css';
//import DictionaryList from './App';
//import Array from './App';

//import App from "./list";
//import StringList from './app1';
//import App from './list';
//import Item from './dynamicdata';

//import ListExample from './dynamis';


//function Welcome(props) {
  //return <h1>Hello, {props.name}</h1>;
//}

//const element = <Welcome name="Faisal Arkan" />;
//ReactDOM.render(
  //element,
  //document.getElementById('root') 
//);

//const elements = ["tiru", "sailu", "pandu", "bujji", "naga", "raj"];
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<StringList elements={elements} />);


// const years = [
//   {
//      value: 2010,
//      label: '2010',
//    },
//   {
//      value: 2011,
//     label: '2011',
//   },
//   {
//     value: 2012,
//     label: '2012',
//  },
//   {
//     value: 2013,
//      label: '2013',
//    },
//   {
//      value: 2014,
//      label: '2014',
//   },
//     {
//     value: 2015,
//     label: '2015',
//   },
//   {
//      value: 2016,
//    label: '2016',
//    },
//   {
//     value: 2017,
//     label: '2017',
//   },
//   {
//     value: 2018,
//     label: '2018',
//   },
//  ]
// const startYear = 2010;
// const endYear = 2019;
// const yearsArray=[];
// for (let i = startYear; i < endYear; i += 1 ){
//   yearsArray.push({value: i, label: JSON.stringify(i)})
// }

// ReactDOM.render(
//   <React.StrictMode>  
// <Array years={years}/>
// </React.StrictMode>,
// document.getElementById('root')
// );

//  React.render(
//    <App/>,
//    document.getElementById('root')
//  );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom";

// import App from "./App";

//  const rootElement = document.getElementById("root");
//  const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// );

// const months = [
//   { value: 1, label: 'jan' },
//   { value: 2, label: 'feb' },
//   { value: 3, label: 'march' },
//   { value: 4, label: 'apr' },
//   { value: 5, label: 'may' },
//   { value: 6, label: 'june' },
//   { value: 7, label: 'july' },
//   { value: 8, label: 'aug' },
//   { value: 9, label: 'sep' },
//   { value: 10, label: 'oct' },
//   { value: 11, label: 'nov' },
//   { value: 12, label: 'dec' },
//  ];
//   const startMonth = 1;
//   const endMonth = 12;
//   const monthsArray=[];
//   for (let i = startMonth; i <= endMonth; i += 1 ){
//     monthsArray.push({value: i, label: JSON.stringify(i)})
//   }
//   ReactDOM.render(
//        <React.StrictMode>  
//      <Array months={months}/>
//     </React.StrictMode>,
//      document.getElementById('root')
//     );
import React from "react";
//import  ReactDOM  from "react-dom";
//import Name from "./Name";
import LoginForm from './Application3';

React.render(
  <LoginForm/>,
  document.getElementById('root')
)