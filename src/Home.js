import React from 'react'
import {Link} from 'react-router-dom'
export const Home = () => {
    return (
        <div>

        <Link to='/About'>
        <button>About</button>
        </Link>
        <Link to='/Contact'>
        <button>Contact</button>
        </Link>

        </div>
    )
}
