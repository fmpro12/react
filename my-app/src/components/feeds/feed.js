import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import clickOn from '../redux_store/actions/actions'
import Notifications from '../notifications/notificaitons'
import './feed.scss'

class Messages extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = () => {
        this.props.mountPost(this.state.value)
    }
    newelement() {
        if (this.props.clicked === true) {
            return this.props.message.map((newpost) => {
                return (
                <div className="post">
                <img className="photo" src="https://pbs.twimg.com/profile_images/1725500761/image_bigger.jpg" alt=""></img>
                <span className="author">Yan Khusid </span>
                <span className="nickname">@fmpro12 </span>
                <br />
                <div className="flexbox_post">
                <span className="newpost">{newpost}</span>
                </div>
                </div >
            )
        })
    }
}

    render() {
        const { clickOn } = this.props

        console.log('Messages - tweets: ', this.props.tweets);
        return <div className="feed">
            <div className="search_div" tabIndex="0">
                <input
                    className="search"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="What's happening?"
                    type="text"
                    ref="feed"
                />
                <button className="EdgeButton"
                    onClick={() => clickOn(this.state.value)} >
                  <span>Tweet</span>
                </button>
            </div>
            <div className='message'>
                {this.newelement()}
            </div>
            <Notifications tweets={this.props.tweets}/>
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
