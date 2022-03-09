import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'



function Barbers({ barbers }) {

console.log(barbers)

    return (
        <div>
            <h1>Our Barbers</h1>
            <div className="barbercontainer">
                {barbers?.map((b) => (<div className="item" key={b.id}>
                    <h1>{b.name}</h1>
                    <img className="img1" alt={b.name} src={b.image} />
                    <p style={{marginTop: 20}}>Contact: {b.phone}</p>
                    <p>{b.experience} Years of Experience</p>
                    <Link to={`/booking/${b.id}`}>
                        <Button variant="dark" >Book With Me</Button>
                    </Link>
                </div>

                ))}
            </div>
        </div>
    )
}

export default Barbers