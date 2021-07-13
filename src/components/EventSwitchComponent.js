

const EventSwitchComponent = () => {

    const handleEvent = (action) => {
        switch (action.type) {
            case 'click':
                alert('Click');
                break;
            case 'mousemove':
                alert('Mousemove');
                break;
            default:
                alert('Some event');
        }
    }

    return <div>
        <button onClick={() => {
            handleEvent({type: 'click'})
        }} >Click</button>
        <button onMouseMove={() => {
        handleEvent({type: 'mousemove'})
    }} >Mousemove</button>
    </div>
}

export default EventSwitchComponent;
