import ButtonDateSelect from "../components/button-date-select"
import InputText from "../components/input-text"
import Text from "../components/text"
import TimePeriodsSelect from "./time-periods-select"

import UserSquareIcon from "../assets/icons/usersquare.svg?react"
import Button from "../components/button"

export default function AsideScheduler () {


    return (
        <aside className="p-20 bg-gray-700 
            rounded-xl
            max-w-124.5
            w-full flex
            flex-col gap-6
            ">
            <div className="space-y-1 w-full">
                 <Text as="h2" variant="title-lg-bold" className="text-white">
                     Agende um Atendimento
                 </Text>
                 <Text variant="title-sm-bold">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
            </div>
            <form className="space-y-8">
                <label className="flex flex-col gap-2 w-full">
                    <Text color="gray-200" variant="text-md-bold">
                        Data
                    </Text>
                    <ButtonDateSelect />
                </label>
                <div className="flex flex-col gap-3 w-full">
                    <Text variant="text-md-bold" color="gray-200">
                        Horários
                    </Text>
                    <TimePeriodsSelect />
                </div>
                <label className="flex flex-col gap-2 w-full">
                    <Text color="gray-200" variant="text-md-bold">
                        Cliente
                    </Text>
                    <InputText icon={UserSquareIcon} placeholder="Nome do Cliente"/>
                </label>
                <Button disabled={true}>
                    Agendar
                </Button>
            </form>
        </aside>
    )
}