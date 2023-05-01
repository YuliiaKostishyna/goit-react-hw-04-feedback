import PropTypes from "prop-types"; 
import css from "./FeedbackOptions.module.css"
const FeedbackOptions = ({onFeedback}) => {
    return (<div className={css.buttonClick}><button type="button" onClick={onFeedback} name="good">Good</button>
    <button type="button" onClick={onFeedback} name="neutral">Neutral</button>
    <button type="button" onClick={onFeedback} name="bad">Bad</button> </div>)
}
FeedbackOptions.propTypes = {
    onFeedback:PropTypes.func.isRequired,
}

export default FeedbackOptions;
