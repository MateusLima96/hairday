import Icon from "../components/icon"
import Text from "../components/text"

import TrashIcon from "../assets/icons/trash.svg?react"

export interface Appointment {
    id: string
    date: string
    time: string
    client: string
}

interface AppointmentsPeriodProps {
    icon: React.ComponentProps<typeof Icon>["svg"]
    label: string
    range: string
    appointments: Appointment[]
    onRemove?: (id: string) => void
}

export default function AppointmentsPeriod({
    icon,
    label,
    range,
    appointments,
    onRemove,
}: AppointmentsPeriodProps) {
    return (
        <section className="border border-gray-600 rounded-lg">
            <header className="flex items-center justify-between px-5 py-3 border-b border-gray-600">
                <div className="flex items-center gap-3">
                    <Icon svg={icon} className="w-5 h-5 fill-yellow" />
                    <Text variant="text-sm" color="gray-300">
                        {label}
                    </Text>
                </div>
                <Text variant="text-md" color="gray-300">
                    {range}
                </Text>
            </header>

            {appointments.length === 0 ? (
                <Text as="p" variant="text-sm" color="gray-300" className="block p-5">
                    Nenhum agendamento para este período
                </Text>
            ) : (
                <ul className="flex flex-col gap-1 p-5">
                    {appointments.map((appointment) => (
                        <li key={appointment.id} className="flex items-center gap-5">
                            <Text variant="text-md-bold" color="gray-200" className="w-12">
                                {appointment.time}
                            </Text>
                            <Text variant="text-md" color="gray-200" className="flex-1">
                                {appointment.client}
                            </Text>
                            <button
                                type="button"
                                className="cursor-pointer p-1"
                                aria-label={`Remover agendamento de ${appointment.client}`}
                                onClick={() => onRemove?.(appointment.id)}
                            >
                                <Icon svg={TrashIcon} className="w-4 h-4 fill-yellow hover:fill-yellow-dark transition" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
