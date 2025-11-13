//  import React from 'react';
 
//  //import ReactDOM from 'react-dom';

// class App extends React.Component{

//   setState = {
//     lists : {
//       'list-1' : 'PHP',
//       'list-2' : 'Wordpress'
//     }
//   }

//     addList = (list) => {

//       var timestamp = (new Date()).getTime();

//       this.state.lists['list-' + timestamp ] = list;

//       this.setState({ lists : this.state.lists });
//      }

//      removeList = (listKey) => {
//       delete this.state.lists[listKey];
//       this.setState({ lists : this.state.lists });
//      }

//      render() {
//       return (
//         <div className="component-wrapper">
//           <ItemList lists={this.state.lists} removeList={this.removeList}/>
//           <AddListForm addList={this.addList} />
//         </div>
//        );
//       }
     

//      }


//      class ItemList extends React.Component{

//       render () {
//         return (
//           <div className="container">
//             <ul className="list-group text-center">
//               {
//                 Object.keys(this.props.lists).map(function(key) {
//                   return <li className="list-group-item list-group-item-info">{this.props.lists[key]} <span onClick={()=>this.props.removeList(key)}>X</span></li>
//                 }.bind(this))
//               }
//             </ul>
//            </div>
//           );
          
//         }
//       }
     



//       class AddListForm extends React.Component{

//         createList = (e) => {
//           e.preventDefault();

//           var list = this.refs.listName.value;

//           if(list.length > 0) {
//             this.props.addList(list);
//           }

//           this.refs.listForm.reset();
//         }

//         render = () => {
//           return(
//             <form className="form-inline" ref="listForm" onSubmit={this.createList}>
//               <div className="form-group">
//                 <label for="listItem">
//                   List Name
//                   <input type="text" id="listItem" className="form-control" placeholder="e.x.lemmon" ref="listName" />
//                 </label>
//               </div>
//               <button type="submit" className="btn btn-primary">Add List</button>
//             </form>
//           )

//         }
//       }

      
// export default App;
    //   React.render(
    //     <App />,
    //     document.getElementById('app')
    //   );


    import React, { useState } from "react";
    import styles from "./styles.css";
    
    const ListItem = ({ item, index, onDeleteItem, onEditItem }) => {
      const [isEditing, setIsEditing] = useState(false);
      const [editValue, setEditValue] = useState(item);
    
      const handleSave = () => {
        onEditItem(index, editValue);
        setIsEditing(false);
      };
    
      return (
        <li key={index} className={styles.listItem}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className={styles.input}
              />
              <div>
                <button
                  onClick={handleSave}
                  className={`${styles.button} ${styles.save}`}
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className={`${styles.button} ${styles.cancel}`}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {item}
              <div>
                <button
                  onClick={() => onDeleteItem(index)}
                  className={`${styles.button} ${styles.delete}`}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditValue(item);
                  }}
                  className={`${styles.button} ${styles.edit}`}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      );
    };
    
    const List = ({ items, onDeleteItem, onEditItem }) => {
      return (
        <div className={styles.listContainer}>
          {items.length > 0 ? (
            <ul>
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  item={item}
                  index={index}
                  onDeleteItem={onDeleteItem}
                  onEditItem={onEditItem}
                />
              ))}
            </ul>
          ) : (
            <p>No items in the list.</p>
          )}
        </div>
      );
    };
    
    export default List;
    

     
    // import React from "react";
    // import AddListForms from "./AddListForms";
    
    // class App extends React.Component{
    
    //  state = {
    //     lists : {
    //       'list-1' : 'PHP',
    //       'list-2' : 'Wordpress'
    //     }
    //  }
    
    //  addList = (list) => {
    
    //     var timestamp = (new Date()).getTime();
    
    //     this.state.lists['list-' + timestamp ] = list;
    
    //     this.setState({ lists : this.state.lists });
    //    }
    
    //    removeList = (listKey) => {
    //     delete this.state.lists[listKey];
    //     this.setState({ lists : this.state.lists });
    //    }
    
    //    render() {
    //     return (
    //       <div className="component-wrapper">
    //         <ItemList lists={this.state.lists} removeList={this.removeList}/>
    //         <AddListForms addList={this.addList} />
    //       </div>
    //      );
    //     }
    
    // }
    
    // class ItemList extends React.Component{
    
    //  render () {
    //     return (
    //       <div className="container">
    //         <ul className="list-group text-center">
    //           {
    //             Object.keys(this.props.lists).map(function(key) {
    //               return <li className="list-group-item list-group-item-info">{this.props.lists[key]} <span onClick={()=>this.props.removeList(key)}>X</span></li>
    //             }.bind(this))
    //           }
    //         </ul>
    //        </div>
    //       );
          
    //     }
    //  }
    
    // class AddListForms extends React.Component{
    
    //  createList = (e) => {
    //     e.preventDefault();
    
    //     var list = this.refs.listName.value;
    
    //     if(list.length > 0) {
    //       this.props.addList(list);
    //     }
    
    //     this.refs.listForm.reset();
    //  }
    
    //  render = () => {
    //     return(
    //       <form className="form-inline" ref="listForm" onSubmit={this.createList}>
    //         <div className="form-group">
    //           <label for="listItem">
    //             List Name
    //             <input type="text" id="listItem" className="form-control" placeholder="e.x.lemmon" ref="listName" />
    //           </label>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Add List</button>
    //       </form>
    //     )
    
    //  }
    // }
    
    // export default App;