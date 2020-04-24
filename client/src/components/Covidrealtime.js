import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Bar from './Bar';
import Covidrealtime2 from './Covidrealtime2'
import Footer from './Footer';

// https://reactstrap.github.io/

const Covidrealtime = (props) => {

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
            <Bar />
            <Covidrealtime2 />
            <h1> CoVid-19 Realtime.</h1>

            <Button color="danger" onClick={toggle} style={{ marginBottom: '1rem' }}>

                Click to show information
            </Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p1>
                            <div> Confirmed : {covid.Confirmed}                         </div>
                            <div> Recovered : {covid.Recovered}                         </div>
                            <div> Hospitalized : {covid.Hospitalized}                    </div>
                            <div> Deaths : {covid.Deaths}                               </div>

                        </p1>
                        <p2>
                            <div> UpdateDate : {covid.UpdateDate}                       </div>
                        </p2>

                    </CardBody>
                </Card>
            </Collapse>
            <Footer />

        </div>

    );
}

export default Covidrealtime