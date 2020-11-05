//@ flow
import * as React from 'react';
import {
  IconWrapper
} from '../style';

type Props = {
  onClick: Function,
};

type State = {
};

class Icon extends React.Component<Props> {
  renderPage = () => {
  };

  render() {
    return (
      <IconWrapper>
        <div
          style = {{backgroundColor:"white"}}
          onClick = {this.props.onClick}
        >
          X
        </div>
      </IconWrapper>
    );
  }
}

export default Icon;