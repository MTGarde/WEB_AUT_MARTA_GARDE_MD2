import { AppointmentPage } from '../support/AppointmentPage';

const appointment = new AppointmentPage();

describe('Scenario 2 - Appointment History Empty', () => {
  it('should show "No appointment" in history for demo user', () => {

    appointment.visit();// Open link

    appointment.clickMakeAppointment(); // Click make appointment

    appointment.login('John Doe', 'ThisIsNotAPassword'); // Login with demo credentials

    appointment.openSidebar(); // Open sidebar menu

    appointment.verifySidebarIsActive(); // Validate sidebar is active

    appointment.clickHistory(); // Click history

    appointment.verifyNoAppointmentText(); // Validate “No appointment” is visible
  });
});