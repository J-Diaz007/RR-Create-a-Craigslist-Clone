export default function Posting(props) {
    return (
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    )
}
