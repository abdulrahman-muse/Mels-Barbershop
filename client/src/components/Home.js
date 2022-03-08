import React from "react";
import Barbers from "./Barbers";
import Services from "./Services";




function Home({ barbers, services }) {
    return (
        <>
            <h1>Welcome to Mel's Barbershop</h1>
            <p>*Appointments are encouraged but Walk-Ins are welcome!*</p>
            <div className="home">
                <h3> 8625 Downer St, Minneapolis Mn</h3>
            </div>
            <div className="home">
                <h3>Hours : 10 am - 6 pm Everyday</h3>
            </div>
            <hr />
            <Barbers barbers={barbers} />
            <hr />
            <Services services={services} />
        </>
    )
}


export default Home