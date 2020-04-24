import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

// https://reactstrap.github.io/

const Covidrealtime2 = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [covid, setCovid] = useState({})

    useEffect(() => {
        getCovid()
    }, []
    )

    const getCovid = async () => {
        const result = await axios.get('https://covid19.th-stat.com/api/open/today')
        setCovid(result.data)
    }

    console.log(covid)

    return (

        <div className="app-container">
            <br />

            <h1> รายงานผล CoVid-19 ตามเวลาจริง </h1>

            <Button color="danger" onClick={toggle} style={{ marginBottom: '1rem' }}>

                คลิกเพื่อแสดงข้อมูล
            </Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p1>
                            <div> ได้รับการยืนยัน : {covid.Confirmed}                         </div>
                            <div> หายแล้ว : {covid.Recovered}                         </div>
                            <div> รักษาอยู่ใน รพ. : {covid.Hospitalized}                    </div>
                            <div> เสียชีวิต : {covid.Deaths}                               </div>
                        </p1>
                        <p2>
                            <div> อัพเดทเมื่อวันที่ : {covid.UpdateDate}                       </div>
                        </p2>
                    </CardBody>
                </Card>

            </Collapse>
        </div>


    );
}

export default Covidrealtime2