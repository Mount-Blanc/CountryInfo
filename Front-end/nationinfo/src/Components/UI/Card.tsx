
import './Card.css'

interface CardProps {
    children?: React.ReactNode;
    className?: string;
}

const Card = (props:CardProps) => {
    return(
        <div className={'card'}>{props.children}</div>
    )
}
export default Card