import './index.css'

const Slides = props => {
  const {details, clicked, slideNumber, clickStstus} = props
  const {id, heading, description} = details

  const eventClick = () => {
    clicked(id)
  }

  return (
    <li
      testid={`slideTab${slideNumber + 1}`}
      className={clickStstus ? 'li li-tr' : 'li'}
    >
      <p className="slid-num">{slideNumber + 1}</p>
      <button onClick={eventClick} type="button" className="li-div">
        <h1 className="slides-h">{heading}</h1>
        <p className="slides-p">{description}</p>
      </button>
    </li>
  )
}

export default Slides
