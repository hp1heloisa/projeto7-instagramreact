import Post from "./Post";

export default function Posts() {

    const listPost = [
        <Post srcUsuario="assets/img/perfiluniverso.webp" altUsuario="discoveryuniverse"
        srcConteudo="assets/img/bruce.jpeg" altConteudo="bruce"
        srcCurtidas="assets/img/einstein.jpeg" altCurtidas="physics"
        numero="240.128"/>,
        <Post srcUsuario="assets/img/meowed.svg" altUsuario="meowed" 
        srcConteudo="assets/img/gato-telefone.svg" altConteudo="gato-telefone"
        srcCurtidas="assets/img/respondeai.svg" altCurtidas="respondeai"
        numero="101.523"/>,
        <Post srcUsuario="assets/img/barked.svg" altUsuario="barked"
        srcConteudo="assets/img/dog.svg" altConteudo="dog"
        srcCurtidas="assets/img/adorable_animals.svg" altCurtidas="adorable_animals"
        numero="99.159"/>
    ]

    return(
        <div className="posts">
            <ul>
                {listPost.map((Post,i) => <li key={i}>{Post}</li>)}
            </ul>
        </div>
    )
}