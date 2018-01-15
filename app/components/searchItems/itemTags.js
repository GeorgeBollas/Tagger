// @flow
import React, { Component } from 'react';

class ItemTag extends Component {
  props: {
    tag: any,
    itemTags: any[]
  };
  render() {
    return (
      <div>
        <div>
          {this.props.itemTags && this.props.itemTags.map((it) => <li key={it.name}>b.name</li>)}
        </div>
      </div>
    );
  }
}

export default ItemTag;
