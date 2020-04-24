import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { FormGroup, Input } from 'reactstrap';



const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch({})
    const covids = useSelector(state => state.covids)
    const form = useSelector(state => state.form)

    const addCovid = async () => {
        const result = await axios.post(`http://localhost:8080/api/covids/`, form)
        dispatch({
            type: "ADD_COVID",
            covid: { ...form, id: covids.length > 0 ? covids[covids.length - 1].id + 1 : 0 }
        })
    }

    return (

        <div className="grey-text">

            <h1>บันทึกทางการเเพทย์</h1>

            <FormGroup>

                รหัสผู้ป่วย <Input type="number" onChange={(e) => dispatch({ type: "CHANGE_NO", no: e.target.value })} />

            </FormGroup>

            <FormGroup>

                วันที่ <Input type="text" onChange={(e) => dispatch({ type: "CHANGE_DATE", date: e.target.value })} />

            </FormGroup>

            <FormGroup>

                ชื่อผู้ป่วย <Input type="text" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />

            </FormGroup>

            <FormGroup>

                อาการของผู้ป่วย <Input type="text" onChange={(e) => dispatch({ type: "CHANGE_TODO", todo: e.target.value })} />

            </FormGroup>

            <FormGroup>

                รูปผู้ป่วย <Input type="text" onChange={(e) => dispatch({ type: "CHANGE_IMG", img: e.target.value })} /> <br />

            </FormGroup>

            <MDBBtn size="md" color="success" onClick={addCovid}>SUBMIT</MDBBtn>
        </div>
    )
}

export default InputForm