
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ItemListActions from '../actions/itemList';

import Items from '../components/searchItems/items';

class ItemsWidget extends Component {
  props: {
    listItemsAsync: (filterText) => void
  };

  constructor() {
    super();
    this.state = { items: [], isAdvancedOptions: true, filterText: '' };
  }

  componentDidMount() {
    this.props.listItemsAsync('');
  }

  render() {
    return (
      <Items
        filterText={this.props.filterText}
        isAdvancedOptions={this.props.isAdvancedOptions}
        items={this.props.items} 
        listItemsAsync={this.props.listItemsAsync}
        toggleAdvancedMode={this.props.toggleAdvancedMode}
        newItem={this.props.newItem}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemListActions, dispatch);
}

function mapStateToProps(state) {
  return {
    items: state.items.items,
    isAdvancedOptions: state.items.isAdvancedOptions,
    filterText: state.items.filterText
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsWidget);
