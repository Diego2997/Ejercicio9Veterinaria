import { Container, Row,Col } from 'react-bootstrap';
import CitasVeterinaria from './CitasVeterinaria';

const ListadoCitasVeterinaria = () => {
    return (
      <Container>
        <Row >
            <Col lg={4} xs={12} md={6}>
            <CitasVeterinaria/>
            </Col>
            <Col lg={4} xs={12} md={6}>
            <CitasVeterinaria/>
            </Col>
            <Col lg={4} xs={12} md={6}>
            <CitasVeterinaria/>
            </Col>
        </Row>
      </Container>
    );
};

export default ListadoCitasVeterinaria;