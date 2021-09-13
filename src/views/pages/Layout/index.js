import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';

import './style.css';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="page-container">
          {this.props.children}
        </div>
      </>
    );
  }
}