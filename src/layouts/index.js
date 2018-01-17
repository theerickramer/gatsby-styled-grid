import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
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
      <Header />
      <div
        style={{
          gridArea: 'main',
          background: 'yellow'
        }}>
        <h1>Main</h1>
        {children()}
      </div>
      <div
        style={{
          gridArea: 'footer',
          background: 'yellowgreen'
        }}>
       <h1>Footer</h1>
      </div>
    </Template>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
