import React from "react"
import { AppointmentsContext } from "../contexts/appointments-context"

export default function useAppointments() {
    const context = React.useContext(AppointmentsContext)

    if (!context) {
        throw new Error("useAppointments deve ser usado dentro de um AppointmentsProvider")
    }

    return context
}
