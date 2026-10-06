import Button from "../components/button"
import Container from "../components/container"
import Text from "../components/text"
import Icon from "../components/icon"
import InputText from "../components/input-text"
import ButtonTimeSelect from "../components/button-time-select"
import ButtonDateSelect from "../components/button-date-select"
import ButtonIcon from "../components/button-icon"

import TrashIcon from "../assets/icons/trash.svg?react"
import UserSquareIcon from "../assets/icons/usersquare.svg?react"


export default function PageComponents() {
    return (
        <Container>
            <div className="flex flex-col gap-2 mt-20">
               
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
                <ButtonIcon icon={UserSquareIcon} />
            </div>

            <div className="mt-6">
                <InputText
                    icon={UserSquareIcon}
                    placeholder="Nome do Cliente"/>
            </div>

            <div className="mt-6 flex gap-2">
                <ButtonTimeSelect>
                    09:00
                </ButtonTimeSelect>

                <ButtonTimeSelect variant="secondary">
                    10:00
                </ButtonTimeSelect>

                <ButtonTimeSelect disabled={true}>
                    10:00
                </ButtonTimeSelect>
            </div>

            <div className="mt-6">
                <ButtonDateSelect  />
            </div>
        </Container>
    )
}