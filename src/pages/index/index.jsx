import './index.less';
import React, { Component } from 'react';


class Index extends Component {
    // 类方法里面的this赋值
    constructor(props) {
        super(props);
    };


    // 返回虚拟dom方法
    render = () => (
        <div id="pageIndex" className="h-100">
        	
        </div>
    );
};


export default Index;