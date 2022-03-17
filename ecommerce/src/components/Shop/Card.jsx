import "../../css/ShopStyle/Card.css"
function Card({ children, reverse }) {
  return <div className={`card1 ${reverse && "reverse"}`}>{children}</div>
}
Card.defaultProps = {
  reverse: false,
}
export default Card
