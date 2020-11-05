import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: grid;
  grid-template-rows: 68px;
  grid-template-columns: auto;
  grid-template-areas: 'tabs';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Tabs = styled.div`
  grid-area: tabs;
  display: grid;
  padding: 0 16px;
  grid-template-columns: auto 1fr repeat(4, auto);
  grid-column-gap: 32px;
  grid-template-rows: auto;
  grid-template-areas: 'logo . about contact support faq';
  align-items: center;
  justify-items: center;

  @media (max-width: 800px) {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'logo . menu';
  }
`;

export const Tab = styled(Link)`
  padding: 4px 8px;
  font-size: 16px;
  font-weight: ${props => (props.selected ? '700' : '500')};
`;

export const LogoTab = styled(Tab)`
  grid-area: logo;
`;

export const AboutTab = styled(Tab)`
  grid-area: about;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContactTab = styled(Tab)`
  grid-area: contact;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SupportTab = styled(Tab)`
  grid-area: support;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FAQTab = styled(Tab)`
  grid-area: faq;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 16px repeat(4, auto);
  grid-template-areas: 'logo' '.' 'about' 'contact' 'support' 'faq';
  align-content: start;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  padding: 16px;
  background-color: rgba(117, 190, 218, 0.5);
  padding-top: 32px;
  z-index: 2;
  flex-direction: column;
`;

export const MenuOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1;
`;

export const MenuTab = styled.div`
  grid-area: menu;

  ${MenuContainer} {
    display: ${props => (props.open ? 'flex' : 'none')};
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const DropdownLink = styled(Link)`
  padding: 16px 0;
  display: flex;
  font-weight: ${props => (props.selected ? '600' : '500')};
`;

export const LogoLink = styled(DropdownLink)`
  grid-area: logo;
`;

export const AboutLink = styled(DropdownLink)`
  grid-area: about;
`;

export const ContactLink = styled(DropdownLink)`
  grid-area: contact;
`;

export const SupportLink = styled(DropdownLink)`
  grid-area: support;
`;

export const FAQLink = styled(DropdownLink)`
  grid-area: faq;
`;

export const IconWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`;