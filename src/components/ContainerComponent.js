import * as React from "react";

const Children = ({content}) => {
    return <div>
        {content}
    </div>
};


export default class ContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: `
            Hello from container`

        }
    }


    render() {
        return <Children content={this.state.content}/>
    }

}
