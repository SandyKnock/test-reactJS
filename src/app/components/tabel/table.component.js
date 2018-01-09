import React, {Component} from "react"
import TableCsv from "./csv.csv"
import {Table} from "semantic-ui-react"
import "./table.sass"

const data = TableCsv;

console.log(data);

data.forEach(item => {
    for (let key in item) {
        let value = item[key];
        console.log(key, value);
    }
});

export default class TableComponent extends Component {
    columnsHeader() {
        let result = [];
        data.columns.forEach((name, i) => {
            result.push(<Table.HeaderCell key={i}>{name}</Table.HeaderCell>)
        });
        return result;
    }

    tableData() {
        let result = [];
        data.map((row, i) => (
            result.push(
                <Table.Row key={i}>
                    {
                        Object.values(row).map((value, i) => (
                            <Table.Cell width={3} className="table-cell" selectable key={i}>
                                <div className="transformValue"> {value}</div>
                            </Table.Cell>
                        ))
                    }
                </Table.Row>
            )
        ));
        return result;
    }


    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {
                            this.columnsHeader()
                        }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.tableData()}
                </Table.Body>
            </Table>
        )
    }
}

