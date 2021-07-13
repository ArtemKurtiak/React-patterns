import { useState } from 'react';


const RenderCallbackComponent = ({ children }) => {

    const [text, setText] = useState('')

    return <div>
        <input type="text" onChange={(e) => {
            setText(e.target.value)
        }} />
        {children(text)}
    </div>
}

export default RenderCallbackComponent;
