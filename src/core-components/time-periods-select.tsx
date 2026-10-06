import ButtonTimeSelect from "../components/button-time-select"
import Text from "../components/text"

export interface TimePeriod {
    label: string
    times: string[]
}

// Horários padrão de cada período (serão substituídos pelos disponíveis da data selecionada)
// eslint-disable-next-line react-refresh/only-export-components
export const defaultTimePeriods: TimePeriod[] = [
    { label: "Manhã", times: ["09:00", "10:00", "11:00", "12:00"] },
    { label: "Tarde", times: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"] },
    { label: "Noite", times: ["19:00", "20:00", "21:00"] },
]

interface TimePeriodsSelectProps {
    periods?: TimePeriod[]
    disabled?: boolean
    selectedTime?: string
    onSelectTime?: (time: string) => void
}

export default function TimePeriodsSelect({
    periods = defaultTimePeriods,
    disabled = true,
    selectedTime,
    onSelectTime,
}: TimePeriodsSelectProps) {
    return (
        <div className="flex flex-col gap-3 w-full">
            {periods.map((period) => (
                <div key={period.label} className="flex flex-col gap-2">
                    <Text variant="text-md" color="gray-200">
                        {period.label}
                    </Text>

                    <div className="flex flex-wrap gap-2">
                        {period.times.map((time) => (
                            <ButtonTimeSelect
                                key={time}
                                type="button"
                                disabled={disabled}
                                variant={selectedTime === time ? "secondary" : "primary"}
                                onClick={() => onSelectTime?.(time)}
                            >
                                {time}
                            </ButtonTimeSelect>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
