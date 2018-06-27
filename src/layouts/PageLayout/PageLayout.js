import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.sass'

import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div>
    <Header title="My Page" user="Hakan"/>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
