import { AppointmentPage } from '../support/AppointmentPage';

const appointment = new AppointmentPage();

describe('Scenario 1 - Make an Appointment', () => {
  it('should complete the appointment form and verify the summary', () => {

    appointment.visit(); // Open link

    appointment.clickMakeAppointment(); // Click Make Appointment

    appointment.login('John Doe', 'ThisIsNotAPassword'); // Login with demo credentials

    // Fill in appointment details
    appointment.setFacility('Seoul CURA Healthcare Center');
    appointment.checkHospitalReadmission();
    appointment.selectMedicaid();
    appointment.setDate('30');
    appointment.setComment('CURA Healthcare Service');
    appointment.bookAppointment();

    appointment.verifySummary({ // Validate the appointment summary
      facility: 'Seoul CURA Healthcare Center',
      readmission: 'Yes',
      program: 'Medicaid',
      date: '30/03/2025', 
      comment: 'CURA Healthcare Service'
    });
  });
});