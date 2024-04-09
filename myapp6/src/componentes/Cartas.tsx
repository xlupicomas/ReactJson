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
  const [razas, setRazas] = React.useState([] as Hoteles)
  React.useEffect(() => {
    fetch("https://github.com/xlupicomas/ReactJson/data.json", {
    //   headers: {
    //     "x-api.key": "live_ioUYq4IUoz5dqMqMJkps9z5NdoL92e4SX81bkV2tNMD4EnAmB6W9HZZ5C2QdM1dp",
    //   },
    }).then((response) => response.json()).then((data: Hoteles) => {
      setRazas(data);
    });

  }, []);
  
  return (
    <div>
      <Row className='row gx-5'>
        {razas.map((Hotel, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <div className="card-body2" key={i}>
              <h5 className='card-title'>{Hotel.nom}</h5>
              <p className='card-text'>{Hotel.disponible}</p>
              <Card.Img/>
                <Image className="img-fluid "
                  src={""+Hotel.ImatgeUrl+""}
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