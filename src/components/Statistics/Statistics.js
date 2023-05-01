import css from "./Statistics.module.css"
import PropTypes from "prop-types"; 
const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    
    return ( <ul className={css.ul}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positiveFeedback}%</li>
      </ul>)
}
Statistics.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positiveFeedback:PropTypes.string.isRequired,
}
export default Statistics;