
const Button = (props) => {
    return <button {...props} type={'button'} >{props.children}</button>
}

const ProxyComponent = () => {
    return <div>
        Buttons with type button:
        <Button style={{ backgroundColor: '#fff' }} >With bg</Button>
        <Button style={{ width: 100 }} >Width 100</Button>

    </div>
}

export default ProxyComponent;
