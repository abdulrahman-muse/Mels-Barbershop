import React from "react";



function Services({ services }) {
    return (
        <div>
            <h1>Our Services</h1>
            <div className="servicecontainer">
                {services?.map((s) => (<div className="item" key={s.id}>
                    <h2>{s.name}</h2>
                    <h5>Price: ${s.price}</h5>
                </div>
                ))}
            </div>
        </div>
    )
}


export default Services