import React from 'react'
import PropTypes from 'prop-types'
import styles from "./TestComponent.module.css";
export interface ITestComponentProp {
    key: number;
    text: string;
}


const styleCustom = {
    color: "white",
    backgroundColor: "green"
}
export class TestComponent extends React.Component<ITestComponentProp> {
    static propTypes = {
        key: PropTypes.number,
        text: PropTypes.string
    }


    constructor(props: ITestComponentProp) {
        super(props)
    }
    render() {
        return (
            <div style={styleCustom}>
                TestComponent: { this.props.key} {this.props.text}
            </div >
        )
    }
}