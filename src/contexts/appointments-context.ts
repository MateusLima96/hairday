import React from "react"
import type { Appointment } from "../models/appointment"

export interface AppointmentsContextValue {
    appointments: Appointment[]
    addAppointment: (appointment: Omit<Appointment, "id">) => void
    removeAppointment: (id: string) => void
}

export const AppointmentsContext = React.createContext<AppointmentsContextValue | null>(null)
