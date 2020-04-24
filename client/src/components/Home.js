import React from 'react'
import Bar from './Bar';
import Img from './Img'
import Footer from './Footer';
import Textcovid from './Textcovid'

const Home = props => {

    return (
        <div>
            <Bar />
            <Img />
            <br />
            <div className="text-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mFKoeai0y8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />
                <Textcovid />
            </div>
            <Footer />
        </div>
    )
}

export default Home;