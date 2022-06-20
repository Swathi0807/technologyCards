// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardProfile} = props
  const {title, description, imgUrl, className} = cardProfile

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="img-card" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
