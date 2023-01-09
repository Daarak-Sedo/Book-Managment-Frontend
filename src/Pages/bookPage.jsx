import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Books = () => {

    let [BookData, setBookData] = useState([])

    useEffect(() => { getStudent() }, [])

    const getStudent = async () => {
        let id = JSON.parse(localStorage.getItem("userId"))
        console.log(id);
        let result = await fetch(`http://localhost:3001/books`,
            {
                headers: {
                    'x-api-key': JSON.parse(localStorage.getItem("token"))

                }
            })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data, "**");
            setBookData(result.data)
        }
    }






    return (

        <div>
            <ul>
                <li><h3>Get All Books</h3></li>
                <li><Link to="/" >LogOut</Link></li>
            </ul>

            <div>
                <table>
                    <tr>
                        <th>title</th>
                        <th>excerpt</th>
                        <th>category</th>
                        <th>reviews</th>
                    </tr>
                    {BookData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.title}</td>
                                <td>{val.excerpt}</td>
                                <td>{val.category}</td>
                                <td>{val.reviews}</td>
                            </tr>
                        )
                    })}
                </table>





            </div>

        </div>
    )

}

export default Books