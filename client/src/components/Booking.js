import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams} from 'react-router-dom';



const dates = [
    {
        "name": "March 12",
        "date": "03/12/2022",
        "id": 1
    },
    {
        "name": "March 13",
        "date": "03/13/2022",
        "id": 2
    },
    {
        "name": "March 14",
        "date": "03/14/2022",
        "id": 3
    },
    {
        "name": "March 15",
        "date": "03/15/2022",
        "id": 4
    },
    {
        "name": "March 16",
        "date": "03/16/2022",
        "id": 5
    }
]

const times = [
    {
        "name": "10 am",
        "id": 1
    },
    {
        "name": "11 am",
        "id": 2
    },
    {
        "name": "12 pm",
        "id": 3
    },
    {
        "name": "1 pm",
        "id": 4
    },
    {
        "name": "2 pm",
        "id": 5
    },
    {
        "name": "3 pm",
        "id": 6
    },
    {
        "name": "4 pm",
        "id": 7
    },
    {
        "name": "5 pm",
        "id": 8
    }
]


function Booking({ appointments, bookAppt, user, errors, services, barbers, cancelAppt }) {
   
    let { id } = useParams()

    let selectedBarber = barbers.filter(element => element.id === parseInt(id))[0]

    let newBarbers = barbers.filter(element => element.id !== parseInt(id))


    // console.log(typeof id)


    const [formData, setFormData] = useState({
        service: "",
        barber_id: selectedBarber === undefined ? "": selectedBarber.id ,
        date: "",
        time: "",
        user_id: user.id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        bookAppt(newData);
        console.log(newData)
    };

    return (
        <>
            <div className="book">
                <Container>
                    <h1 className="m-5">Book An Appointment 💈</h1>
                    <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Select size="sm" name="barber_id" onChange={handleInputChange}>
                                {selectedBarber ? <option name="barber_id" value={selectedBarber.id} key={selectedBarber.id}>{selectedBarber.name}</option> : <option value={0} >Select Barber</option>}
                                {newBarbers.map((barber) => (
                                    <option name="barber_id" value={barber.id} key={barber.id}>{barber.name}</option>
                                ))}
                            </Form.Select>
                            <br />
                            <Form.Select size="sm" name="service" onChange={handleInputChange}>
                                <option>Select Service</option>
                                {services.map((service) => (
                                    <option name="service" value={service.name} key={service.id} >{service.name}</option>
                                ))}
                            </Form.Select>
                            <br />
                            <Form.Select size="sm" name="date" onChange={handleInputChange}>
                                <option>Select Date</option>
                                {dates.map((date) => (
                                    <option name="date" value={date.name} key={date.id}>{date.name}</option>
                                ))}
                            </Form.Select>
                            <br />
                            <Form.Select size="sm" name="time" onChange={handleInputChange}>
                                <option>Select Time</option>
                                {times.map((time) => (
                                    <option name="time" value={time.name} key={time.id}>{time.name}</option>
                                ))}
                            </Form.Select>
                            <Button variant="dark" className='m-3' type="submit">Confirm Booking</Button>
                            <div>
                                {errors.map((err) => (
                                    <Alert key={err} variant={'danger'}>{err}</Alert>
                                ))}
                            </div>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
            <hr />
            <h1>My Appointments:</h1>
            <div className="apptcontainer">
                {appointments.length >= 1 ? (appointments.map((a) => (<div className="item" key={a.id}>
                    <h2>Service: {a.service}</h2>
                    <h4>{a.barber}</h4>
                    <h5>{a.date} at {a.time}</h5>
                    <Button variant="dark" onClick={() => cancelAppt(a.id)}>Cancel</Button>
                </div>)))
                    : <h4>*No Upcoming Appointments*</h4>}
            </div>
        </>
    )
}

export default Booking