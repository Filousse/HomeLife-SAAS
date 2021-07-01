import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetData from "../dashboard/WidgetData.json";
import { Col, Row, Card, Container } from 'react-bootstrap';

const Grid = ({updateTeam}) => {
    const [ dataEducatif, setDataEducatif] = useState([]);
    const [ dataMedical, setDataMedical] = useState([]);
    const [ dataOverall, setDataOverall] = useState([]);
    const radios = ["Equipe educative", "Equipe Médical", "Administrateur"];
    const [ selectedRadio, setSelectedRadio] = useState("Administrateur")

    useEffect(()=> {
            setDataEducatif(WidgetData.educative);
            setDataMedical(WidgetData.medical);
            setDataOverall(WidgetData.overall);
    },[]);

    const handleRadio = (value)=>{
            setSelectedRadio(value);
            updateTeam(value)       
    }
        
    return (
        <Container className=" w-100 pb-3">
            <Card  bg="light" fluid style={{"paddingLeft": "20px", "paddingTop": "5px", "margin":"20px"}}>
                <Row>
                    {radios.map((radio) => {
                        return (
                            <Col key={radio}>
                                <input 
                                    type="radio" 
                                    value={radio} 
                                    id={radio}
                                    checked={radio === selectedRadio} 
                                    onChange={(e) => handleRadio(e.target.value)}
                                />
                                <label htmlFor={radio}>{radio}</label>   
   
                            </Col>
                        );
                    })}
                </Row>
            </Card>
            <div  fluid style={{"maxWidth":"1200px"}}>
               <Row className="justify-content-center w-100 m-0">
                    { selectedRadio == "Equipe educative" &&
                    <>
                        {dataEducatif
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                        {dataOverall
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                    </>
                    }
                    { selectedRadio == "Equipe Médical" &&
                    <>
                        {dataMedical
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                        {dataOverall
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                </>
                    }
                    { selectedRadio == "Administrateur" &&
                    <>
                        {dataEducatif
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                        {dataMedical
                            .map((widget) => (
                            <Widget data={widget} key={widget.name}/>
                        ))}
                        {dataOverall
                            .map((widget) => (
                            <Widget data={widget} key={widget.name} team={selectedRadio}/>
                        ))}
                    </>
                    }
                    
                   
                </Row>
            </div>
        </Container>
    );
};

export default Grid;