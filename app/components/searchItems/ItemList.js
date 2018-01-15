// @flow
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import Item from './Item';

const styles = theme => ({

  root: theme.mixins.gutters({
    // paddingTop: 16,
    // paddingBottom: 16,
    // marginTop: theme.spacing.unit,
    overflow: 'auto',
    // position: 'absolute',
    height: '100%',
    bottom: 0,
  }),
});

class ItemList extends Component {

  props: {
    items: [],
    classes: any
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ul>
          {this.props.items && this.props.items.map((b, i) => <li key={b.name}><Item item={b} /></li>)}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(ItemList);
