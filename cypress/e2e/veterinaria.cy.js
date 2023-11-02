describe("Formulario Veterinaria", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
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
        cy.get("input[name='mascota']").type("Perro");
        cy.get("input[name='duenio']").type("Dueño");
        cy.get("input[name='fecha']").type("2023-06-15");
        cy.get("input[name='hora']").type("09:00");
        cy.get("textarea[name='sintomas']").type("sintomas de la mascota");
        cy.get("button[type='submit']").click();
    });

    it("Deberia borrar la cita", () => {
        cy.get(".btn-danger").click();
        cy.get("Card").should("not.exist");
    });
});
