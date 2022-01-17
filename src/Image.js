// import { useState } from "react";
import Button from "./Button";
import {Card, Container, Row, Col, CardImg, CardTitle,
  CardSubtitle, CardBody} from 'reactstrap'

const Image = ({page}) => {



  return ( 
    <Container>
      <Row>
      {page.photos ? page.photos.map(photo=>(
        <Col>
        <Card key={photo.id} className="image">
        <CardImg top width="100%"src={photo.img_src} alt="Surface of Mars"/>
        <CardBody>
           <CardTitle>Curiosity Rover - {photo.camera.full_name}</CardTitle> 
           <CardSubtitle>{photo.earth_date}</CardSubtitle>
           <Button/>
           </CardBody>
        </Card>
        </Col>
       

       
      )):null}
      </Row>
    </Container>
   );
}
 
export default Image;