

const ConditionalRenderingComponent = ({ success }) => {
    return <div>
        {success ? <p>Success!</p> : <p>Fail!</p>}
    </div>
}

export default ConditionalRenderingComponent;
