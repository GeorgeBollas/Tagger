// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import ItemsWidget from '../containers/ItemsWidget';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <ItemsWidget />
        </div>
      </div>
    );
  }
}

