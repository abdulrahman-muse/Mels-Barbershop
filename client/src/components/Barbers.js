import React from "react";
import { Link } from 'react-router-dom';



function Barbers({ barbers, services }) {



    return (
        <div>
            <h1>Our Barbers</h1>
            <div className="cccontainer">
                {barbers?.map((b) => (<div className="item" key={b.id}>
                    <h1>{b.name}</h1>
                    <img className="img1" alt={b.name} src={b.image} />
                    <p>Contact: {b.phone}</p>
                    <p>{b.experience} Years of Experience</p>
                    <Link to={`/my-appointments/${b.id}`}>
                    <button >Book With Me</button>
                    </Link>
                </div>

                ))}
            </div>
            <div className="ccontainer">
                <h1>Our Services</h1>
                {services?.map((s) => (<div className="item" key={s.id}>
                    <h2>{s.name}</h2>
                    <p>*{s.about}*</p>
                    <p>Price: ${s.price}</p>
                </div>

                ))}
            </div>
        </div>
    )
}

export default Barbers