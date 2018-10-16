import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import clickOn from '../redux_store/actions/actions'
import Posts from '../posts/post'
import './feed.css'

class Messages extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    handleSubmit = () => {
        this.props.mountPost(this.state.value)
    }
    newelement() {
        const { message, clicked } = this.props
        console.log('clicked', clicked);
        if (clicked === true) {
            return (
                    <div className="post">{message}</div >
            )
        }
    }

    render() {
        const { clickOn } = this.props
        return <div className="feed">
            <div className="search_div" tabIndex="0">
                <input
                    className="search"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="What's happening?"
                />
                <button className="EdgeButton"
                    onClick={() => clickOn(this.state.value)} >
                  <span>Tweet</span>
                </button>
            </div>
            <div className='message'>
                {this.newelement()}
            </div>
            <Posts />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.messages.messages_data,
        clicked: state.messages.clicked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickOn: bindActionCreators(clickOn, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
