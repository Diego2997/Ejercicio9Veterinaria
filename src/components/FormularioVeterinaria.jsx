// import { useState,useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ListadoCitasVeterinaria from "./ListadoCitasVeterinaria";

const FormularioVeterinaria = () => {
  return (
    <>
    <Container className="mt-5 border border-info-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4>Llenar el formulario para crear una cita</h4>
        <hr></hr>
      <Container fluid className="bg-form">
        <Form>
          <Row>
            <Form.Group
              className="mb-3 d-flex justify-content-md-around align-items-center"
              controlId="mascota"
            >
              <Col xs={5} md={4}>
                <Form.Label className="fw-bold">Nombre Mascota</Form.Label>
              </Col>
              <Col xs={6} md={4}>
                <Form.Control type="text" placeholder="nombre de mascota" />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3 d-flex align-items-center justify-content-md-around"
              controlId="duenio"
            >
              <Col xs={5} md={4}>
                <Form.Label className="fw-bold">Nombre Dueño</Form.Label>
              </Col>
              <Col xs={6} md={4}>
                <Form.Control type="password" placeholder="nombre del dueño" />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6} className=" d-flex align-items-center justify-content-md-around">
              <Form.Group className="mb-3 " controlId="fecha">
                <Form.Label className="fw-bold">Fecha</Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="dd/mm/yyyy" />
                </Col>
              </Form.Group>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Form.Group className="mb-6" controlId="hora">
                <Form.Label className="fw-bold">Hora</Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="hh/mm" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group
              className="mb-3 d-flex align-items-center justify-content-md-around"
              controlId="duenio"
            >
              <Col xs={5} md={4}>
                <Form.Label className="fw-bold">Sintomas</Form.Label>
              </Col>
              <Col xs={6} md={4}>
                <Form.Control
                  type="password"
                  placeholder="describir sintomas"
                />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Col className="text-center">
              <Button variant="danger" type="submit">
                Agregar una nueva cita
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
    <ListadoCitasVeterinaria/>
    </>
  );
};

export default FormularioVeterinaria;
