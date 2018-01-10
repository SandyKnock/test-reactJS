import React, {Component} from "react"
import "./header.less"
import header from "img/header.png"
import MenuComponent from "../menu/menu.component";

export default class HeaderComponent extends Component {

    constructor() {
        super();
        this.state = {
            currentTimestamp: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currentTimestamp: new Date() })
        }, 1000);
    }


    render() {
        let titleArray = ['page1', 'page2', 'page3'];
        return (
            <header>
                <MenuComponent titleArray={titleArray}></MenuComponent>
                <div className="header">
                    <p className={'time'}>Time: {this.state.currentTimestamp.toLocaleString()}</p>
                    <img src={header} alt="" className="header-img"/>
                </div>
            </header>
        )
    }
}

