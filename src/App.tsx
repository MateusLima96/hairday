import Button from "./components/button"
import Container from "./components/container"
import Text from "./components/text"
import TrashIcon from "./assets/icons/trash.svg?react"
import Icon from "./components/icon"
import UserSquare from "./assets/icons/usersquare.svg?react"
import ButtonIcon from "./components/button-icon"
import InputText from "./components/input-text"
import ButtonTimeSelect from "./components/button-time-select"

export default function App() {

  return (
    <Container>
        <div className="flex flex-col gap-2 mt-20">
            <Text variant="title-lg-bold" className="text-white">
                Agende um Atendimento
            </Text>
            <Text variant="title-sm-bold">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
            <Text variant="text-md">Texto MD</Text>
            <Text variant="text-sm">Texto SM</Text>
        </div>

        
        <div>
            <Button>Agendar</Button>
        </div>

        <div className="mt-6">
            <Icon className="fill-yellow hover:fill-yellow-dark" svg={TrashIcon} />
        </div>

        <div className="mt-6">
            <ButtonIcon icon={TrashIcon} />
            <ButtonIcon icon={UserSquare} />
        </div>

        <div className="mt-6">
            <InputText
                icon={UserSquare}
                placeholder="Nome do Cliente"/>
        </div>

          <div className="mt-6 flex gap-2">
            <ButtonTimeSelect>
                09:00
            </ButtonTimeSelect>

            <ButtonTimeSelect variant="secondary">
                10:00
            </ButtonTimeSelect>
        </div>
    </Container>
  )
}
