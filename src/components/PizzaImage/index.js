import React from 'react'

// Pizza image source
import pizza from '../../assets/pizza.jpg'

// Css styles
import './styles.css'

function PizzaImage(props) {
    return (
        <div className="PizzaImage">
            <img src={pizza} className="PizzaImg"/>
        </div>
    )
}

export default PizzaImage