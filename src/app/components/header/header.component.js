import React, {Component} from "react"
import "./header.less"
import header from "img/header.png"

export default class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <div className="header">
                    <img src={header} alt="" className="header-img"/>
                </div>
            </header>
        )
    }
}

