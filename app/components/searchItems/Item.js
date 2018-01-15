// @flow
import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class Item extends Component {
  props: {
    item: any
  };
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography type="headline">{this.props.item.name}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Item;
