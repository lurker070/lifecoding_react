import React from "react";

class Control extends React.Component {
    render () {
      return (
        <ul>
            <li><button><a href="/create" onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('create');
            }}>create</a></button></li>
            <li><button><a href="/update" onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('update');
            }}>update</a></button></li>
            <li><input onClick={(event) => {
              event.preventDefault();
              this.props.onChangeMode('delete');
            }} type="button" value="delete"></input></li>
          </ul>
      );
    }
}

export default Control;