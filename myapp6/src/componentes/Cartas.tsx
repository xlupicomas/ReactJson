import React from 'react'
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export type Hoteles = Hotel[]


export interface Hotel {
 nom: string
 id: number
 disponible: boolean
 ImatgeUrl: string
}
function Breeds() {
  const [Hoteles, setHoteles] = React.useState([] as Hoteles)
  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/xlupicomas/ReactJson/main/data.json")
    .then((response) => response.json())
    .then((data: Hoteles) => {
        setHoteles(data);
    });

  }, []);
  
  return (
    <div>
      <Row className='row gx-5'>
        {Hoteles.map((Hotel, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <div className="card-body2" key={i}>
              <h5 className='card-title'>{Hotel.nom}</h5>
              <p className='card-text'>{Hotel.disponible ? "Disponible" : "No disponible" }</p>
                <Image
                  src={Hotel.ImatgeUrl}
                  alt={Hotel.nom}
                  fluid
                />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Breeds