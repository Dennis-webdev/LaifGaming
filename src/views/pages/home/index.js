//@ flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100vw;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  
  @media (max-width: 600px) {
  }
`;

type Props = {
};

type State = {
};

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoImage src="/img/bg.jpg" alt="" />
      </Wrapper>
    );
  }
}

export default Home;