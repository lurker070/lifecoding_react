import React from "react"

class TOC extends React.Component {
    render() {
        const data = this.props.data;
        console.log(data);
        return (
            <nav>
                {data.map(data => (
                    <li key={data.id}>
                        <a href={"/content/"+data.id} 
                        data-id = {data.id}
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.onChangePage(event.target.dataset.id);
                        }}>{data.title}
                        </a>
                    </li>
                ))}
            </nav> 
        );
    }
  }

export default TOC;