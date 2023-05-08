export default function Story(props) {
    return(
        <div className="story">
            <div className="imagem">
              <img src={props.src} alt={props.alt}/>
            </div>
            <div className="usuario">
              {props.nome}
            </div>
          </div>
    )
}