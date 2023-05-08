import Story from "./Story";

export default function Stories() {

    const listStory = [
        <Story src="assets/img/9gag.svg" alt="9gag" nome="9gag" />,
        <Story src="assets/img/meowed.svg" alt="meowed" nome="meowed" />,
        <Story src="assets/img/barked.svg" alt="barked" nome="barked" />,
        <Story src="assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" nome="nathanwpylestrangeplanet" />,
        <Story src="assets/img/wawawicomics.svg" alt="wawawicomics" nome="wawawicomics" />,
        <Story src="assets/img/respondeai.svg" alt="respondeai" nome="respondeai" />,
        <Story src="assets/img/filomoderna.svg" alt="filomoderna" nome="filomoderna" />,
        <Story src="assets/img/memeriagourmet.svg" alt="memeriagourmet" nome="memeriagourmet" />,
    ]

    return(
        <div className="stories">
            <ul className="listaStories">
                {listStory.map((Story, i) => <li key={i}>{Story}</li>)}
            </ul>
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}