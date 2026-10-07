import AppointmentsProvider from "../contexts/appointments-provider";
import AsideScheduler from "../core-components/aside-schedule-appointment";
import ListAppointments from "../core-components/list-appointments";


export default function PageHome() {
    return (
        <AppointmentsProvider>
            <AsideScheduler />
            <ListAppointments />
        </AppointmentsProvider>
    )
}
