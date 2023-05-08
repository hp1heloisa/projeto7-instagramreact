import { useState } from "react";

export default function Post(props) {
    let [coracao,setCoracao] = useState("heart-outline");
    let [botaoClasse, setBotaoClasse] = useState('nada');
    let [salva,setSalva] = useState("bookmark-outline");
    let [curtidas,setCurtidas] = useState(props.numero);
    let [botaoClasseImg, setBotaoClasseImg] = useState('nada');


    function curtir(){
        if (coracao=="heart-outline"){
            setCoracao("heart");
            setBotaoClasse("like");
            setCurtidas(
                (Number(props.numero)+0.001).toFixed(3)
                );
                
        }else{
            setCoracao("heart-outline");
            setBotaoClasse("nada");
            setCurtidas(props.numero)
        }
    }

    function curtirImagem() {
        setCoracao("heart");
        setBotaoClasse("like");
        setCurtidas(
            (Number(props.numero)+0.001).toFixed(3)
            );
        setBotaoClasseImg("teste");
        setTimeout(()=>setBotaoClasseImg("nada"), 500);
    }

    function salvar() {
        if (salva=="bookmark-outline"){
            setSalva("bookmark");
        }else{
            setSalva("bookmark-outline");
        }
    }

    return(
        <div className="post" data-test="post">
          <div className="topo">
            <div className="usuario">
              <img src={props.srcUsuario} alt={props.altUsuario}/>
                    {props.altUsuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div className="conteudo">
            <img src={props.srcConteudo} alt={props.altConteudo} data-test="post-image" onDoubleClick={curtirImagem}/>
            <ion-icon name="heart" class={botaoClasseImg}></ion-icon>
          </div>
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name={coracao} data-test="like-post" class={botaoClasse} onClick={curtir}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name={salva} data-test="save-post" onClick={salvar}></ion-icon>
              </div>
            </div>
            <div className="curtidas">
              <img src={props.srcCurtidas} alt={props.altCurtidas}/>
              <div className="texto" data-test="likes-number">
                Curtido por <strong>{props.altCurtidas}</strong> e <strong>outras {curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    )
}