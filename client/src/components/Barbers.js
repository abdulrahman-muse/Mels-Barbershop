import React from "react";


function Barbers({ barbers }) {


    return (
        <div className="container">
            {barbers.map((b) => (<div className="item" key={b.id}>
                <h1>{b.name}</h1>
                <img className="img1" alt={b.name} src={b.image} />
                <p>Contact: {b.phone}</p>
                <p>{b.experience} Years of Experience</p>
                <button>Book With Me</button>
            </div>

            ))}
        </div>
    )
}

export default Barbers