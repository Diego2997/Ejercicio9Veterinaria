describe("Formulario Veterinaria", () => {
    const NOMBRE_MASCOTA = "Homero";
    const NOMBRE_DUENIO = "Diego";
    const HORA_RESERVA_TURNO = "10:00";
    const FECHA_TURNO = "2023-11-02";
    const SINTOMAS_MASCOTA = "Sintomas de la mascota";

    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("Deberia existir el formulario", () => {
        cy.get("Form").should("exist");
    });

    it("Deberia mostrar los mensajes de error si se envia el formulario vacio", () => {
        cy.get("button[type='submit']").click();
        cy.contains("El nombre de la mascota es requerido").should("exist");
        cy.contains("El nombre del dueño es requerido").should("exist");
        cy.contains("La fecha es requerida").should("exist");
        cy.contains("La hora es requerida").should("exist");
        cy.contains("La descripción de los sintomas es obligatorio").should(
            "exist"
        );
    });

    it("Deberia agregar una nueva cita al enviar el formulario", () => {
        cy.get("input[name='mascota']").type(NOMBRE_MASCOTA);
        cy.get("input[name='duenio']").type(NOMBRE_DUENIO);
        cy.get("input[name='fecha']").type(FECHA_TURNO);
        cy.get("input[name='hora']").type(HORA_RESERVA_TURNO);
        cy.get("textarea[name='sintomas']").type(SINTOMAS_MASCOTA);
        cy.get("button[type='submit']").click();
        cy.contains(NOMBRE_MASCOTA);
        cy.get(".cita").should("exist");
    });

    it("Deberia borrar la cita", () => {
        cy.get(".btn-danger").click();
        cy.get(".cita").should("not.exist");
    });
});
