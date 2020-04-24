import React from 'react'
import Covidlist from './Covidlist'
import InputForm from './InputForm'
import Bar from './Bar';
import Footer from './Footer';



const Home = props => {

    return (
        <div>

            <Bar />
            <br />
            <h2>รายชื่อผู้ป่วย</h2>
            <br />
            <Covidlist />
            <InputForm />
            <Footer />

            <div>
            </div>
        </div>
    )
}

export default Home;