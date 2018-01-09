import React, {Component} from "react";
import HeaderComponent from "./header/header.component"
import TableComponent from "./tabel/table.component"
import {Container, Grid} from "semantic-ui-react"

export default class AppComponent extends Component {
    a = 2;

    constructor() {
        super();
        this.state = {
            a: this.a
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
                            <button className="ui primary button" onClick={() => this.hello()}></button>
                            <div className="">{this.state.a}</div>
                            <TableComponent></TableComponent>
                        </article>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}