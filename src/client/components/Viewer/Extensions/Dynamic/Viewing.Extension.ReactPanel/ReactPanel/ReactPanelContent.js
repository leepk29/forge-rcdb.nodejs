
import React from 'react'

export default class ReactPanelContent extends React.Component {
  /// //////////////////////////////////////////////////////
  //
  //
  /// //////////////////////////////////////////////////////
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)

    this.state = {
      date: ''
    }
  }

  /// //////////////////////////////////////////////////////
  //
  //
  /// //////////////////////////////////////////////////////
  componentDidMount () {
    this.intervalId = window.setInterval(this.update, 1000)
  }

  /// //////////////////////////////////////////////////////
  //
  //
  /// //////////////////////////////////////////////////////
  componentWillUnmount () {
    window.clearInterval(this.intervalId)
  }

  /// //////////////////////////////////////////////////////
  //
  //
  /// //////////////////////////////////////////////////////
  update () {
    this.setState({
      date: new Date().toLocaleString()
    })
  }

  /// //////////////////////////////////////////////////////
  //
  //
  /// //////////////////////////////////////////////////////
  render () {
    const { date } = this.state

    return (
      <div className='react-content'>
        Rendered by React!
        <br />
        {date}
      </div>
    )
  }
}
