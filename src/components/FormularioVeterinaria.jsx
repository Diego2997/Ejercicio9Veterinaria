import { useState,useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  FloatingLabel,
} from "react-bootstrap";
import ListadoCitasVeterinaria from "./ListadoCitasVeterinaria";
import { useForm } from "react-hook-form";

const FormularioVeterinaria = () => {
  const citasLocalStorage = JSON.parse(localStorage.getItem('listadoCitas')) || []
  const { register,handleSubmit,formState: { errors }} = useForm();
  const [citas, setCitas] = useState(citasLocalStorage);

  const onSubmit = (data) => {
   setCitas([...citas,data])

  };
  useEffect(()=>{
    localStorage.setItem("listadoCitas",JSON.stringify(citas))
  },[citas])

  const borrarCita = (nombreDuenio) =>{
    const filtrarCita = citas.filter((cita)=> cita.duenio !== nombreDuenio)
    setCitas(filtrarCita)
  }

  return (
    <>
      <Container className="mt-5 border border-info-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
        <h4>Llenar el formulario para crear una cita</h4>
        <hr></hr>
        <Container fluid className="bg-form">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Form.Group
                className="mb-3 d-flex justify-content-md-around align-items-center"
                controlId="mascota"
              >
                <Col xs={5} md={4}>
                  <Form.Label className="fw-bold">Nombre Mascota</Form.Label>
                </Col>
                <Col xs={6} md={4}>
                  <Form.Control
                    type="text"
                    {...register("mascota", {
                      minLength: 2,
                      required: "El nombre de la mascota es requerido. ",
                      maxLength: 16,
                    })}
                    placeholder="nombre de mascota"
                  />
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
                  <Form.Control
                    type="text"
                    {...register("duenio", {
                      required: "El nombre del dueño es requerido. ",
                      minLength: 2,
                      maxLength: 20,
                    })}
                    placeholder="nombre del dueño"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row>
              <Col
                xs={6}
                md={6}
                lg={6}
                className=" d-flex align-items-center justify-content-md-around"
              >
                <Form.Group className="mb-3 " controlId="fecha">
                  <Form.Label className="fw-bold">Fecha</Form.Label>
                  <Col>
                    <Form.Control
                      type="date"
                      placeholder="dd/mm/yyyy"
                      {...register("fecha", {
                        required: "La fecha es requerida. ",
                        max: "06/30/2023",
                        min: "05/31/2023",
                      })}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col xs={6} md={6} lg={6}>
                <Form.Group className="mb-6" controlId="hora">
                  <Form.Label className="fw-bold">Hora</Form.Label>
                  <Col>
                    <Form.Control
                      type="time"
                      placeholder="hh/mm"
                      max="18:00"
                      {...register("hora", {
                        required: "La hora es requerida. ",
                        min: "09:00",
                        max: "18:00",
                      })}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="sintomas"
            >
              <Form.Label className="fw-bold">Sintomas</Form.Label>
              <FloatingLabel
                controlId="textArea"
                label="Describa los sintomas de su mascota aqui..."
              >
                <Form.Control
                className="textarea"
                style={{height:"150px"}}
                  as="textarea"
                  placeholder="describir sintomas"
                  {...register("sintomas", {
                    required: "La descripción de los sintomas es obligatorio",
                  })}
                />
              </FloatingLabel>
            </Form.Group>
            <Row>
              <Col className="text-center">
                {errors.mascota && (
                  <Alert variant="danger">
                    {errors.mascota?.message}Minimo 2 caracteres y como maximo
                    16
                  </Alert>
                )}
                {errors.duenio && (
                  <Alert variant="danger">
                    {errors.duenio?.message}Minimo 2 caracteres y como maximo 20
                  </Alert>
                )}
                {errors.fecha && (
                  <Alert variant="danger">
                    {errors.fecha?.message}No puedes reservar una cita con la
                    fecha anterior
                  </Alert>
                )}
                {errors.hora && (
                  <Alert variant="danger">
                    {errors.hora?.message}Las citas son entre las 09:00 y las
                    18:00
                  </Alert>
                )}
                 {errors.sintomas && (
                  <Alert variant="danger">
                    {errors.sintomas?.message}
                  </Alert>
                )}
                <Button variant="danger" type="submit">
                  Agregar una nueva cita
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
      <ListadoCitasVeterinaria citas={citas} borrarCita={borrarCita}/>
    </>
  );
};

export default FormularioVeterinaria;
