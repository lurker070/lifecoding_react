import React from "react"

class CreateContent extends React.Component {
    render (){
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_proces" method="post"
            onSubmit={(event) => {
              event.preventDefault();
              this.props.onSubmit(
                event.target.title.value,
                event.target.desc.value
              );
            }}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="discription"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
}

export default CreateContent;
