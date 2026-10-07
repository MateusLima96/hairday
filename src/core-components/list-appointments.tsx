import React from "react"
import ButtonDateSelect from "../components/button-date-select"
import Text from "../components/text"
import AppointmentsPeriod, { type Appointment } from "./appointments-period"
import { getToday } from "../helpers/date"

import SunHorizonIcon from "../assets/icons/sunhorizon.svg?react"
import CloudSunIcon from "../assets/icons/cloudsun.svg?react"
import MoonStarsIcon from "../assets/icons/moonstars.svg?react"

// Faixas de horário de cada período (hora inicial e final, inclusivas)
const periods = [
    { label: "Manhã", range: "9h-12h", start: 9, end: 12, icon: SunHorizonIcon },
    { label: "Tarde", range: "13h-18h", start: 13, end: 18, icon: CloudSunIcon },
    { label: "Noite", range: "19h-21h", start: 19, end: 21, icon: MoonStarsIcon },
]

export default function ListAppointments() {
    const [selectedDate, setSelectedDate] = React.useState(getToday())
    const [appointments, setAppointments] = React.useState<Appointment[]>([])

    const appointmentsOfDay = appointments.filter((appointment) => appointment.date === selectedDate)

    function handleRemoveAppointment(id: string) {
        setAppointments((current) => current.filter((appointment) => appointment.id !== id))
    }

    return (
        <div className="w-full py-20">
            <div className="mx-auto flex flex-col gap-8 max-w-170.5">
                <header className="flex justify-between gap-6">
                    <div className="flex flex-col gap-1">
                        <Text as="h2" color="gray-100" variant="title-lg-bold">
                            Sua agenda
                        </Text>
                        <Text color="gray-300" variant="text-sm">
                            Consulte os seus cortes de cabelo agendados por dia
                        </Text>
                    </div>
                    <ButtonDateSelect
                        size="sm"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </header>
                <div className="space-y-3">
                    {periods.map((period) => (
                        <AppointmentsPeriod
                            key={period.label}
                            icon={period.icon}
                            label={period.label}
                            range={period.range}
                            appointments={appointmentsOfDay.filter((appointment) => {
                                const hour = Number(appointment.time.split(":")[0])
                                return hour >= period.start && hour <= period.end
                            })}
                            onRemove={handleRemoveAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}