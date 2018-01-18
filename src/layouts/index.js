import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Template/Header';
import Main from '../components/Template/Main';
import Footer from '../components/Template/Footer';

import './index.css';

const Template = styled.div`
  display: grid;
  grid-template:
    'header header header' 100px
    '. main .' auto
    'footer footer footer' 100px
    / 1fr 90% 1fr;
  width: 100%;
  height: 100%;
`;

const TemplateHeader = styled(Header)`
  grid-area: header;
  background: rebeccapurple;
`;

const TemplateMain = styled(Main)`
  grid-area: main;
  background: yellow;
`;

const TemplateFooter = styled(Footer)`
  grid-area: footer;
  background: yellowgreen;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="What Gatsby?"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Template>
      <TemplateHeader />
      <TemplateMain children={children()}/>
      <TemplateFooter />
    </Template>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
