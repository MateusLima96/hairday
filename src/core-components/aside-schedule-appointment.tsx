import ButtonDateSelect from "../components/button-date-select"
import InputText from "../components/input-text"
import Text from "../components/text"
import TimePeriodsSelect, { defaultTimePeriods } from "./time-periods-select"
import useAppointments from "../hooks/use-appointments"
import { getToday, isPastTime } from "../helpers/date"

import UserSquareIcon from "../assets/icons/usersquare.svg?react"
import Button from "../components/button"
import React from "react"

const allTimes = defaultTimePeriods.flatMap((period) => period.times)

export default function AsideScheduleAppointment () {
    const { appointments, addAppointment } = useAppointments()

    const [date, setDate] = React.useState(getToday())
    const [time, setTime] = React.useState("")
    const [client, setClient] = React.useState("")

    // Horários já agendados na data escolhida ou que já passaram
    const unavailableTimes = allTimes.filter((availableTime) =>
        isPastTime(date, availableTime) ||
        appointments.some((appointment) => appointment.date === date && appointment.time === availableTime)
    )

    const canSubmit = !!date && !!time && !unavailableTimes.includes(time) && client.trim() !== ""

    function handleChangeDate(newDate: string) {
        setDate(newDate)
        setTime("")
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!canSubmit) return

        addAppointment({ date, time, client: client.trim() })
        setTime("")
        setClient("")
    }

    return (
        <aside className="p-20 bg-gray-700 
            rounded-xl
            max-w-124.5
            w-full flex
            flex-col gap-6
            ">
            <div className="space-y-1 w-full">
                 <Text as="h2" variant="title-lg-bold" className="text-white">
                     Agende um atendimento
                 </Text>
                 <Text variant="text-sm">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
            </div>
            <form className="space-y-8" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-2 w-full">
                    <Text color="gray-200" variant="text-md-bold">
                        Data
                    </Text>
                    <ButtonDateSelect
                        value={date}
                        onChange={(e) => handleChangeDate(e.target.value)}
                    />
                </label>
                <div className="flex flex-col gap-3 w-full">
                    <Text variant="text-md-bold" color="gray-200">
                        Horários
                    </Text>
                    <TimePeriodsSelect
                        disabled={!date}
                        selectedTime={time}
                        unavailableTimes={unavailableTimes}
                        onSelectTime={setTime}
                    />
                </div>
                <label className="flex flex-col gap-2 w-full">
                    <Text color="gray-200" variant="text-md-bold">
                        Cliente
                    </Text>
                    <InputText
                        icon={UserSquareIcon}
                        placeholder="Nome do Cliente"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                    />
                </label>
                <Button type="submit" disabled={!canSubmit}>
                    Agendar
                </Button>
            </form>
        </aside>
    )
}