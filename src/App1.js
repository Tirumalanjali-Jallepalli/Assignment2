import './App.css';
function StringList(props) {
  const elements = props.elements;
  const listItems = elements.map((element) =>
    <li>{element}</li>
  );
  return (
    <ol>{listItems}</ol>
  );
}


export default StringList;

