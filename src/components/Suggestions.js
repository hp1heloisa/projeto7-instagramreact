import Suggestion from "./Suggestion"

export default function Suggestions() {

    const listaSugestoes = [
        <Suggestion src="assets/img/lingua.webp" alt="memesanimais.svg" nome="memesanimais"/>,
        <Suggestion src="assets/img/chibirdart.svg" alt="chibirdart" nome="chibirdart"/>,
        <Suggestion src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" nome="razoesparaacreditar"/>,
        <Suggestion src="assets/img/adorable_animals.svg" alt="adorable_animals" nome="adorable_animals"/>,
        <Suggestion src="assets/img/smallcutecats.svg" alt="smallcutecats" nome="smallcutecats"/>,
    ]

    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <ul>
                {listaSugestoes.map(Sugestao => <li>{Sugestao}</li>)}
            </ul>
      </div>
    )
}