export default function Posting(props) {
    return (
        <div>
            <h2>{props.data.title}</h2>
            <img src={props.data.imageURL} alt={props.data.title} />
            <p>{props.data.description}</p>
            <p>{props.data.price}</p>
        </div>
    )
}
