import {useState, useEffect} from "react";
import axios from 'axios'

export const WithApiValues = ({Component, ...props}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(users.data)
        }
        fetchUsers();
    }, [])

    return <Component users={users} {...props} />

}

export const RenderName = (props) => {
    return <div>
        Your current account name is {props.yourName} <br/>
        {props.users.length > 0  && <span>Users are {props.users.map(el => {
            return <div key={el.id} > {el.name}</div>
        })}</span>}

    </div>
}
