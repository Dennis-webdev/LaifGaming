//@ flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

const Overview = () => {
  return (
    <div>Overview</div>
  );
};

type Props = {
};

type State = {
};

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Overview />
      </Wrapper>
    );
  }
}

export default Home;