import React, {Component} from "react";
import HeaderComponent from "./header/header.component"
import TableComponent from "./tabel/table.component"
import {Container, Grid} from "semantic-ui-react"
import MenuComponent from "./menu/menu.component";
import {Route} from "react-router-dom"

export default class AppComponent extends Component {
    a = 2;

    constructor() {
        super();
        this.state = {
            a: this.a,
        }
    }

    hello() {
        this.setState(prevState => ({
            a: prevState.a + 2
        }));
        console.log(this.a);
    }

    render() {
        return (
            <Container textAlign='justified'>
                <Grid container columns={1}>
                    <Grid.Column>
                        <HeaderComponent></HeaderComponent>
                        <article>
                            <Route path="/" exact component={TableComponent} />
                            {/*<button className="ui primary button" onClick={() => this.hello()}></button>*/}
                            {/*<div className="">{this.state.a}</div>*/}
                            {/*<TableComponent></TableComponent>*/}
                            <Route path="/test" component={HeaderComponent} />
                        </article>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}