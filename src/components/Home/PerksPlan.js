import { StyleButtons } from "./StyleButtons"

export default function PerksPlan({link, title}) {
    return(
        <StyleButtons corBotao="#FF4791" href={link} target="_blank">
            {title}
        </StyleButtons>
    )
}
