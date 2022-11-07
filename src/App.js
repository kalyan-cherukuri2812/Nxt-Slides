import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'

import Slides from './components/Slides'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here

export default class App extends Component {
  state = {
    slidesList: initialSlidesList,
    clickStstus: initialSlidesList[0].id,
    headingIpValue: initialSlidesList[0].heading,
    descriptionIpValue: initialSlidesList[0].description,
    showHeading: true,
    showDescription: true,
  }

  click = id => {
    console.log(id)
    const {slidesList} = this.state
    const data = slidesList.filter(each => each.id === id)
    this.setState({
      clickStstus: id,
      headingIpValue: data[0].heading,
      descriptionIpValue: data[0].description,
    })
  }

  headingInputChange = event => {
    this.setState({headingIpValue: event.target.value})
    const {slidesList, clickStstus} = this.state
    const data = slidesList.map(each => {
      if (each.id === clickStstus) {
        return {
          ...each,
          heading: event.target.value,
        }
      }
      return each
    })
    this.setState({slidesList: data})
    console.log(event.target.value)
  }

  discriptionInputChange = event => {
    this.setState({descriptionIpValue: event.target.value})
    const {slidesList, clickStstus} = this.state
    const data = slidesList.map(each => {
      if (each.id === clickStstus) {
        return {
          ...each,
          description: event.target.value,
        }
      }
      return each
    })
    this.setState({slidesList: data})
    console.log(event.target.value)
  }

  headingTextClick = () => {
    this.setState(prev => ({showHeading: !prev.showHeading}))
  }

  discriptionTextClick = () => {
    this.setState(prev => ({showDescription: !prev.showDescription}))
  }

  headingInputkeydown = event => {
    if (event.key === 'Enter') {
      this.setState({showHeading: true})
      if (event.target.value === '') {
        const {slidesList, clickStstus} = this.state
        const data = slidesList.map(each => {
          if (each.id === clickStstus) {
            return {
              ...each,
              heading: 'Heading',
            }
          }
          return each
        })
        this.setState({slidesList: data, headingIpValue: 'Heading'})
      }
    }
  }

  discriptionInputkeydown = event => {
    console.log(event.key)
    console.log(event.target.value)
    if (event.key === 'Enter') {
      this.setState({showDescription: true})
      if (event.target.value === '') {
        const {slidesList, clickStstus} = this.state
        const data = slidesList.map(each => {
          if (each.id === clickStstus) {
            return {
              ...each,
              description: 'Description',
            }
          }
          return each
        })
        this.setState({slidesList: data, descriptionIpValue: 'Description'})
      }
    }
  }

  headingFocus = event => {
    console.log('Focus')
  }

  headingBlur = event => {
    console.log('blur')

    this.setState({showHeading: true})
    if (event.target.value === '') {
      const {slidesList, clickStstus} = this.state
      const data = slidesList.map(each => {
        if (each.id === clickStstus) {
          return {
            ...each,
            heading: 'Heading',
          }
        }
        return each
      })
      this.setState({slidesList: data, headingIpValue: 'Heading'})
    }
  }

  descriptionFocus = event => {
    console.log('Focus')
  }

  descriptionBlur = event => {
    this.setState({showDescription: true})
    if (event.target.value === '') {
      const {slidesList, clickStstus} = this.state
      const data = slidesList.map(each => {
        if (each.id === clickStstus) {
          return {
            ...each,
            description: 'Description',
          }
        }
        return each
      })
      this.setState({slidesList: data, descriptionIpValue: 'Description'})
    }
  }
  // cccccccccccccccccccccccccc

  newAdd = () => {
    const {slidesList, clickStstus} = this.state
    const find = slidesList.findIndex(each => each.id === clickStstus)
    console.log(find)
    slidesList.splice(find + 1, 0, {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    })
    this.setState({slidesList}, this.click(slidesList[find + 1].id))
  }

  render() {
    const {
      slidesList,

      clickStstus,
      headingIpValue,
      descriptionIpValue,
      showHeading,
      showDescription,
    } = this.state

    return (
      <div className="nxt-slides">
        <div className="header">
          <img
            className="nxt-slides-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
          />
          <h1 className="header-heading">Nxt Slides</h1>
        </div>
        <div className="slides-div">
          <div className="slides">
            <button onClick={this.newAdd} className="btn" type="button">
              <img
                className="btn-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
              />
              New
            </button>
            <ol>
              {slidesList.map(each => (
                <Slides
                  slideNumber={slidesList.indexOf(each)}
                  details={each}
                  key={each.id}
                  clicked={this.click}
                  clickStstus={clickStstus === each.id}
                />
              ))}
            </ol>
          </div>
          <div className="current-div">
            <div className="current-sl">
              {showHeading === true ? (
                <h1 onClick={this.headingTextClick} className="current-h1">
                  {headingIpValue}
                </h1>
              ) : (
                <input
                  className="heading-input-div"
                  onChange={this.headingInputChange}
                  type="text"
                  value={headingIpValue}
                  onKeyDown={this.headingInputkeydown}
                  onFocus={this.headingFocus}
                  onBlur={this.headingBlur}
                />
              )}

              {showDescription === false ? (
                <input
                  className="discription-input-div"
                  type="text"
                  value={descriptionIpValue}
                  onChange={this.discriptionInputChange}
                  onKeyDown={this.discriptionInputkeydown}
                  onFocus={this.descriptionFocus}
                  onBlur={this.descriptionBlur}
                />
              ) : (
                <p onClick={this.discriptionTextClick} className="current-p">
                  {descriptionIpValue}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
