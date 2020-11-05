//@ flow
import * as React from 'react';
import Icon from './icon';
import {
  NavContainer,
  Tabs,
  LogoTab,
  AboutTab,
  ContactTab,
  SupportTab,
  FAQTab,
  MenuTab,
  LogoLink,
  AboutLink,
  ContactLink,
  SupportLink,
  FAQLink,
  MenuContainer,
  MenuOverlay,
} from '../style';

type Props = {
  location: Object,
};

type State = {
  menuIsOpen: boolean,
};

class Nav extends React.Component<Props, State> {
  state = { menuIsOpen: true };

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <NavContainer>
        <Tabs>
          <LogoTab
            to="/"
          >
            LogoTab
          </LogoTab>
          <AboutTab
            selected={this.props.location === 'about'}
            to="/about"
          >
            AboutTab
          </AboutTab>
          <ContactTab
            selected={this.props.location === 'contact'}
            to="/contact"
          >
            ContactTab
          </ContactTab>
          <SupportTab
            selected={this.props.location === 'support'}
            to="/support"
          >
            SupportTab
          </SupportTab>
          <FAQTab
            selected={this.props.location === 'faq'}
            to="/faq"
          >
            FAQTab
          </FAQTab>
          <MenuTab open={this.state.menuIsOpen}>
            <Icon
              onClick={() => this.toggleMenu()}
            />
            <MenuContainer open={this.state.menuIsOpen}>
              <LogoLink
                to="/"
              >
                LogoLink
              </LogoLink>
              <AboutLink
                selected={this.props.location === 'about'}
                to="/about"
              >
                AboutLink
              </AboutLink>
              <ContactLink
                selected={this.props.location === 'contact'}
                to="/contact"
              >
                ContactLink
              </ContactLink>
              <SupportLink
                selected={this.props.location === 'support'}
                to="/support"
              >
                SupportLink
              </SupportLink>
              <FAQLink
                selected={this.props.location === 'faq'}
                to="/faq"
              >
                FAQLink
              </FAQLink>
            </MenuContainer>
            <MenuOverlay
              onClick={() => this.toggleMenu()}
              open={this.state.menuIsOpen}
            />
          </MenuTab>
        </Tabs>
      </NavContainer>
    );
  }
}

export default Nav;