import { useDispatch , useSelector } from "react-redux";
import { login , logout } from "./action/authActions";

const Auth = () => {
    const dispatch = useDispatch();
    const { isAuthenticated , user} = useSelector(state => state.auth );
    const handleLogin = () => {
        const user = {name: 'sohaib'};
        dispatch( login(user) );
    }

    const handleLogout = () => {
        dispatch( logout() );
    }
    return (
        <div>
            <h1>Auth</h1>
            {isAuthenticated && <h1>{user.name}</h1>}
            {
                !isAuthenticated ? <button onClick={handleLogin}>login</button> 
                : <button onClick={handleLogout}>logout</button>
            }
        </div>
    );
};

export default Auth