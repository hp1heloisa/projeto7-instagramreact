import { useState } from "react";

export default function User() {
    let [nome,setNome] = useState("catanacomics");
    let [imagem,setImagem] = useState("assets/img/catanacomics.svg");

    function perguntaImagem() {
        let novaImagem = prompt('Qual será o link da nova imagem?');
        if (novaImagem){
            setImagem(novaImagem);
        }
    }

    function perguntaNome() {
        let novoNome = prompt('Qual será o novo nome de usuário?');
        if (novoNome){
            setNome(novoNome);
        }
    }


    return (
        <div className="usuario">
          <img src={imagem} alt="imagem de perfil" data-test="profile-image" onClick={perguntaImagem}/>
          <div className="texto">
            <span>
              <strong data-test="name">{nome}</strong>
              <ion-icon name="pencil" data-test="edit-name" onClick={perguntaNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}