import React from 'react'
import PropTypes from 'prop-types'
import "./TestComponent.module.scss";
export interface ITestComponentProp {
    key: number;
    text: string;
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
            <div className="tableComponent">
                TestComponent: { this.props.key} {this.props.text}
            </div >
        )
    }
}