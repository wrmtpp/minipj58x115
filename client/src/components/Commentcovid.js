import React from 'react'
import Covidlist from './Covidlist'
import InputForm from './InputForm'
import Bar from './Bar';



const Home = props => {

    return (
        <div>

            <Bar />


            <h2>Covids</h2>
            <Covidlist />
            <h2>------------------------------------------------------------------------------------------------------</h2>
            <InputForm />
            <h2>------------------------------------------------------------------------------------------------------</h2>

            <div>
            </div>
        </div>
    )
}

export default Home;