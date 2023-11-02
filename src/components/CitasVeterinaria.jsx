import { Button, Card, Form } from "react-bootstrap";

const CitasVeterinaria = ({ cita, borrarCita }) => {
    const { mascota, duenio, fecha, hora, sintomas } = cita;
    return (
        <Card className="border shadow p-3 mb-5 bg-body-tertiary rounded cita">
            <Card.Header>
                <Card.Title>Mascota: {mascota}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Dueño/a: {duenio}
                </Card.Subtitle>
            </Card.Header>
            <Card.Body className="bg-form">
                <div className="d-flex justify-content-around align-items-center">
                    <Card.Subtitle>Fecha:</Card.Subtitle>
                    <Form.Control
                        className="ms-3"
                        type="text"
                        value={fecha}
                        readOnly
                    ></Form.Control>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <Card.Subtitle>Hora:</Card.Subtitle>
                    <Form.Control
                        className="ms-3"
                        type="text"
                        value={hora}
                        readOnly
                    ></Form.Control>
                </div>
                <div>
                    <Card.Subtitle>Sintomas:</Card.Subtitle>
                    <Form.Control
                        className="ms-3 textareaCitas"
                        as="textarea"
                        value={sintomas}
                        readOnly
                    ></Form.Control>
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Button
                    type="button"
                    variant="danger"
                    className="ms-auto"
                    onClick={() => borrarCita(duenio)}
                >
                    Borrar
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CitasVeterinaria;
