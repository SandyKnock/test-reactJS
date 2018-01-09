import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './menu.sass'
import {NavLink} from "react-router-dom"

export default class MenuComponent extends Component {

    state = {};

    constructor() {
        super();
        this.state = {};
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    menuItem(activeItem) {
        let result = [];
        for (let i = 0; i < this.props.titleArray.length; i++) {
         result.push(
             <Menu.Item
                 key={i}
                 name={this.props.titleArray[i]}
                 active={activeItem === this.props.titleArray[i]}
                 content={this.props.titleArray[i]}
                 onClick={this.handleItemClick}
                 as={NavLink}
                 to="/test"
             />
         )
        }
        return result
    }

    // this.state = {activeItem: {a: 1}}
    // a = this.state.activeItem.a

    render() {
        const {activeItem} = this.state;
        // const activeItem = this.state.activeItem;
        return (
            <Menu>
                {this.menuItem(activeItem)}
            </Menu>
        )
    }
}

MenuComponent.propTypes = {
    titleArray: PropTypes.array
};
