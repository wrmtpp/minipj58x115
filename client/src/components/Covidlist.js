import React, { useEffect } from 'react';
import CovidCard from './CovidCard';
import './Covidlist.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
const Covidlist = props => {
    const covids = useSelector(state => state.covids);
    const dispatch = useDispatch();

    const getCovids = async () => {
        const result = await axios.get(`https://fierce-citadel-85386.herokuapp.com/api/covids`)
        const action = { type: 'GET_COVIDS', covids: result.data }
        dispatch(action)
    }

    useEffect(() => {
        getCovids()
    }, [])

    if (!covids || !covids.length)
        return (<h2>ไม่มีข้อมูล</h2>)

    return (
        <div className='covidlist-container'>
            {
                covids.map((covid, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <CovidCard  {...covid} updateCovid={() => props.updateCovid(covid.id)} deleteCovid={() => props.deleteCovid(covid.id)} />
                    </div>
                ))
            }
        </div>

    )
}

export default Covidlist;