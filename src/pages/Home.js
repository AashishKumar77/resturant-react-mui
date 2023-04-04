import React from 'react'
import Layout from './../components/Layout/Layout';
import { Link } from 'react-router-dom'
import Banner from '../images/Banner3.jpeg'
import '../styles/HomeStyles.css'
import colors from '../Theam/Colors';
import English from '../Theam/strings';
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{ backgroundImage: `url(${Banner})`}}>
           <div className='headerContainer'>
            
             <h1 style={{color:colors.black}}>{English.subtitle}</h1>
             <p>Best Food In India</p>
             <Link to="/menu">
             <button>ORDER NOW</button>
             </Link>
           </div>
        </div>
    </Layout>
  )
}

export default Home
