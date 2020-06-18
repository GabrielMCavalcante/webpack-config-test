import React, { Component } from 'react'

// Components
import PizzaImage from '../components/PizzaImage'

class Pizza extends Component {
    render() {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        )
    }
}

export default Pizza