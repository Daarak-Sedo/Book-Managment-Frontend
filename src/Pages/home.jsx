import { Link } from "react-router-dom"
// import './home.css'

const HomePage = () => {

    return (
        <div className="link">

            <ul>
                <li><Link to='/login' style={{fontSize:"40px" , color:"green"}}> Login</Link></li>   <br/>
                <li><Link to="/signup" style={{fontSize:"40px", color:"green"}} > SignUp</Link></li>
            </ul>
        </div>
    )
}

export default HomePage