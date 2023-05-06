import Post from "./Post";

export default function Posts() {

    const listPost = [
        <Post srcUsuario="assets/img/meowed.svg" altUsuario="meowed" 
        srcConteudo="assets/img/gato-telefone.svg" altConteudo="gato-telefone"
        srcCurtidas="assets/img/respondeai.svg" altCurtidas="respondeai"
        numero="101.523"/>,
        <Post srcUsuario="assets/img/barked.svg" altUsuario="barked"
        srcConteudo="assets/img/dog.svg" altConteudo="dog"
        srcCurtidas="assets/img/adorable_animals.svg" altCurtidas="adorable_animals"
        numero="99.159"/>,
        <Post srcUsuario="assets/img/barked.svg" altUsuario="barked"
        srcConteudo="assets/img/dog.svg" altConteudo="dog"
        srcCurtidas="assets/img/adorable_animals.svg" altCurtidas="adorable_animals"
        numero="99.159"/>,
    ]

    return(
        <div class="posts">
            <ul>
                {listPost.map(Post => <li>{Post}</li>)}
            </ul>
        </div>
    )
}