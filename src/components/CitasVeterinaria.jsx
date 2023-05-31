import { Button, Card,Form } from "react-bootstrap";

const CitasVeterinaria = () => {
    return (
        <Card className="border shadow p-3 mb-5 bg-body-tertiary rounded">
        <Card.Header>
        <Card.Title>Mascota: </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Dueño/a: </Card.Subtitle>
        </Card.Header>
        <Card.Body className="bg-form">
            <div className="d-flex justify-content-around align-items-center">
          <Card.Subtitle>
            Fecha:
          </Card.Subtitle>
          <Form.Control className="ms-3" type="text" value="Hola" readOnly></Form.Control>
            </div>
            <div className="d-flex justify-content-around align-items-center">
          <Card.Subtitle>
            Hora:
          </Card.Subtitle>
          <Form.Control className="ms-3" type="text" value="Hola" readOnly></Form.Control>
            </div>
            <div className="d-flex justify-content-around align-items-center">
          <Card.Subtitle>
            Sintomas:
          </Card.Subtitle>
          <Form.Control className="ms-3" type="text" value="Describir sintomas" readOnly></Form.Control>
            </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
            <Button type="button" variant="danger" className="ms-auto">Borrar</Button>
        </Card.Footer>
      </Card>
    );
};

export default CitasVeterinaria;