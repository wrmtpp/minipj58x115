import React from 'react'
import Bar from './Bar';
import Img from './Img'
import Footer from './Footer';
import Textcovid from './Textcovid'
import './Home.css'
const Home = props => {

    return (
        <div>
            <Bar />
            <Img />
            <br />
            <Textcovid />

            <div className="youtubelink">
                <iframe  src="https://www.youtube.com/embed/mFKoeai0y8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default Home;