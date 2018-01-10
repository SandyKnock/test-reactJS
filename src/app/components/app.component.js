import React, {Component} from "react";
import HeaderComponent from "./header/header.component"
import TableComponent from "./tabel/table.component"
import {Container, Grid} from "semantic-ui-react"
import {Route} from "react-router-dom"
import CanvasComponent from "./canvas/canvas.component";
import {connect} from 'react-redux'

export default class AppComponent extends Component {
    a = 2;

    constructor() {
        super();
        this.state = {
            a: this.a,
        }
    }

    // hello() {
    //     this.setState(prevState => ({
    //         a: prevState.a + 2
    //     }));
    //     console.log(this.a);
    // }

    render() {
        return (
            <Container textAlign='justified'>
                <Grid container columns={1}>
                    <Grid.Column>
                        <HeaderComponent></HeaderComponent>
                        <article>
                            <Route path="/page1" exact component={TableComponent} />
                            <Route path="/page2" component={CanvasComponent} />
                        </article>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

// export default connect(
//     state => ({}),
//     dispatch => ({})
// )