import { Link } from "react-router-dom"

const ErrorPage = () => {

    return <div>
        <p>Error: 404 , There is no such page. Please <Link to="/"> go to Home Page.</Link></p>
    </div>

}

export default ErrorPage