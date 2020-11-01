//@ flow
import * as React from 'react';
import Home from './home';

type Props = {
};

type State = {
};

class Pages extends React.Component {
  renderPage = () => {
    switch (this.props.match.path) {
      case '/about':{
        return <h2>About</h2>;
      }
      case '/contact':{
        return <h2>Contact</h2>;
      }
      case '/support': {
        return <h2>Support</h2>;
      }
      case '/faq': {
        return <h2>FAQ</h2>;
      }
      case '/':
      default: {
        return <Home {...this.props} />;
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          Navigation
        </div>
        {this.renderPage()}
      </div>
    );
  }
}

export default Pages;