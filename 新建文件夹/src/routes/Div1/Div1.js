import React, { Component } from 'react'
import { connect } from 'dva';
import './div1.less'

@connect(
    state=>state
)
class Div1 extends Component {
    render() {
        console.log(this.props.count)
        const { dispatch } = this.props;
        return (
            <div>
                <button onClick={ () => { dispatch({ type: 'count/fetch', payload: { text: 'nm' } }) } } >按钮</button>
                {this.props.count.num}
                这是div页
            </div>
        );
    }
}

export default Div1;