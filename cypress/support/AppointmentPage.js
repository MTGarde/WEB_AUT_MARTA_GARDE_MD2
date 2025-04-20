export class AppointmentPage {
  visit() {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  }

  clickMakeAppointment() {
    cy.get('#btn-make-appointment').click();
  }

  login(username, password) {
    cy.get('#txt-username').type(username);
    cy.get('#txt-password').type(password);
    cy.get('#btn-login').click();
  }

  setFacility(facility) {
    cy.get('#combo_facility').select(facility);
  }

  checkHospitalReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }

  selectMedicaid() {
    cy.get('#radio_program_medicaid').check();
  }

  setDate(day) {
    cy.get('#txt_visit_date').click();
    cy.get('.datepicker').contains(day).click();
  }

  setComment(comment) {
    cy.get('#txt_comment').type(comment);
  }

  bookAppointment() {
    cy.get('#btn-book-appointment').click();
  }
  
    openSidebar() {
    cy.get('#menu-toggle').click();
  }

  verifySidebarIsActive() {
    cy.get('#sidebar-wrapper').should('have.class', 'active');
  }

  clickHistory() {
    cy.get('#sidebar-wrapper').contains('History').click();
  }

  verifyNoAppointmentText() {
    cy.contains('No appointment').should('be.visible');
  }

  // Assertions
  verifySummary({ facility, readmission, program, date, comment }) {
    cy.get('#facility').should('have.text', facility);
    cy.get('#hospital_readmission').should('have.text', readmission);
    cy.get('#program').should('have.text', program);
    cy.get('#visit_date').should('have.text', date);
    cy.get('#comment').should('have.text', comment);
  }
}