export default function Suggestion(props) {
    return(
        <div className="sugestao">
        <div className="usuario">
          <img src={props.src} alt={props.alt}/>
          <div className="texto">
            <div className="nome">{props.nome}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    )
}