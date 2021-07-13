import {useContext} from "react";
import {ColorContext} from "../App";


const StatelessComponent = (props) => {

    const { color } = useContext(ColorContext)

    return <div>
        <p style={{ color }} >
            Stateless component is component what doesn`t contain state and doesn`t contain refs
        </p>


    </div>
}

export default StatelessComponent;
