import React, {Component} from 'react'

export default class LoginInfoPanel extends Component {
    render() {
        return(
            <div>
                {this.props.logged ? <span>WelCome <strong>{this.props.userName}</strong></span> : <span>Unlogged</span>}
            </div>
        )
    }
}
LoginInfoPanel.defaultProps = {
  logged : false,
  userName : ''
}