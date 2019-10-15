import React from 'react';

export interface IProps {
  dataList: any[];
}

export default class AnswerList extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    
    return (
      <ul>
        {
          this.props.dataList.map(item => {
            return (<li key={item.key}>{item.key} = {item.value}</li>);
          })
        }
      </ul>
    )
  }
}