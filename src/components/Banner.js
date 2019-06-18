import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
    { label: "Untersucheng", value: 1 },
    { label: "Kastration", value: 2 },
    { label: "Impung", value: 3 },
    { label: "Der Letze Weg", value: 4 },
    { label: "Andere", value: 5 },
  ];

 

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>BOOK A VET VISIT FOR YOUR PET IN BERLIN!</h1>
                <p align='center' style={{color:'white'}}>Hassle free service, happier pet!</p>
            </header>
            <div className="content">
                <form>
                <ul className="actions">
                    <li><input 
                    type="text" 
                    name="name"
                    placeholder="Full Name"
                     /></li>
                    <li><input 
                    type="text" 
                    name="phone"
                    placeholder="Phone"
                     /></li>
                    <li><input 
                    type="text" 
                    name="zip"
                    placeholder="Zipcode"
                     /></li>    
                     <li><div classname="selector"><Dropdown options={services} onChange={console.log("CLick")}  placeholder="Select an option" /></div></li>         
                    <li><a href="#one" className="button next scrolly">Book Appointment</a></li>
                </ul>
                </form>
            </div>
        </div>
    </section>
)

export default Banner
