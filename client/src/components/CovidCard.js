import React from 'react';
import './CovidCard.css';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
const CovidCard = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    const deleteCovid = async () => {
        const result = await axios.delete(`http://localhost:8080/api/covids/${props.id}`)
        dispatch({type : 'DELETE_COVID', id: props.id})
      }
    
    const updateCovid = async () => {
    const result = await axios.put(`http://localhost:8080/api/covids/${props.id}`,form)
    dispatch({type : 'UPDATE_COVID', id: props.id , covid: {...form, id: props.id}})
  }
    return (
        <div className='covidcard-container'>
            <div className='covidcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='covidcard-no'>{props.no}</p>
                <p className='covidcard-date'>{props.date}</p>
                <p className='covidcard-name'>{props.name}</p> 
                <p className='covidcard-todo'>{props.todo}</p>

            </div>
            <div className='covidcard-actions'>
                <div onClick={updateCovid}>Update</div>
                <div onClick={deleteCovid}>Delete</div>
            </div>
        </div>

    )
}

export default CovidCard;