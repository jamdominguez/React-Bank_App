import React, {Component} from 'react'

export default class LoginInfoPanel extends Component {
    _handleRender = (props) => {
        const { logged, user } = props
        if (logged) {
            return(
                <div align="center">
                        <svg className="bi bi-person-check-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm9.854-2.854a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        </svg>                    
                    <div>{user}</div>
                </div>
            )
        } else {
            return(
                <div align="center">
                    <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    < path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <div>Unknow</div>
                </div>
            )
        }
    }

    render() {
        return(
            <span>
                {this._handleRender(this.props)}
            </span>
        )
    }
}
LoginInfoPanel.defaultProps = {
  logged : false,
  userName : ''
}