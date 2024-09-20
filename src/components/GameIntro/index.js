export default function GameIntro ({icon, name, description}) {

    return <div>
        <img width={128} height={128} src={icon} />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
}