import React from 'react'
import './Home.css';

const Home = (props) => {
    return (
        <div className="home">
            <h1> Welcome to the Home page</h1>
            <div className="product">
                    <h3> Xbox One X</h3>
                    <h3> Price: £599</h3>
                    <button onClick={props.myFunc}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Home
