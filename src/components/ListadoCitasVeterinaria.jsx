import { Container, Row,Col } from 'react-bootstrap';
import CitasVeterinaria from './CitasVeterinaria';

const ListadoCitasVeterinaria = ({citas,borrarCita}) => {
    return (
      <Container>
        <Row >
          {citas.map((cita,index)=>
          <Col lg={4} md={6} xs={12}>
            <CitasVeterinaria key={index} cita={cita} borrarCita={borrarCita}/>
            </Col>)}
        </Row>
      </Container>
    );
};

export default ListadoCitasVeterinaria;