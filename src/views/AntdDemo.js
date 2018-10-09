import React, { Component } from 'react'

import { Picker, List, WhiteSpace } from 'antd-mobile';


// 如果不是使用 List.Item 作为 children
// const CustomChildren = props => (
//   <div
//     onClick={props.onClick}
//     style={{ backgroundColor: '#fff', paddingLeft: 15 }}
//   >
//     <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
//       <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
//       <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
//     </div>
//   </div>
// );

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

class Demo extends React.Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
    visible: false,
    colorValue: ['#00FF00'],
  };
  
  render() {
    return (<div>
      <List style={{ backgroundColor: 'white' }} className='picker-list'>
        <Picker
          data={seasons}
          title='选择季节'
          cascade={false}
          extra='请选择(可选)'
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow='horizontal'>Multiple</List.Item>
        </Picker>
      </List>
    </div>)
  }
}

export default Demo