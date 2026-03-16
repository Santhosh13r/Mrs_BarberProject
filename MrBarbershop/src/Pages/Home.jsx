import React from 'react'
import Carousel from '../Components/Carousel'

const Home = () => {
  return (
    <>
    <div className="contianer">
        <div className="row">
            <div className="col-md-6">
                <h1>Welcome to Mr.Barbershop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <button className="btn btn-primary">Book an appointment</button>
            </div>
            
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Carousel/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Home