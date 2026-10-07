import React from "react"
import { AppointmentsContext } from "./appointments-context"
import useLocalStorage from "../hooks/use-local-storage"
import type { Appointment } from "../models/appointment"

const APPOINTMENTS_KEY = "hairday:appointments"

export default function AppointmentsProvider({ children }: { children: React.ReactNode }) {
    const [appointments = [], setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])

    function addAppointment(appointment: Omit<Appointment, "id">) {
        setAppointments((current = []) => [...current, { id: crypto.randomUUID(), ...appointment }])
    }

    function removeAppointment(id: string) {
        setAppointments((current = []) => current.filter((appointment) => appointment.id !== id))
    }

    return (
        <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment }}>
            {children}
        </AppointmentsContext.Provider>
    )
}
