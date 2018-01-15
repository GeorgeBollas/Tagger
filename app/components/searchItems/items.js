// @flow
import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import ItemList from './ItemList';
import ItemFilter from './ItemFilter';
import EditItemDialog from './editItemDialog';
import styles from './items.css';

class Items extends Component {
  props: {
    newItem: (name: string) => void,
    items: [],
    isAdvancedOptions: boolean,
    filterText: string
  };

  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
    this.newItem = this.newItem.bind(this);
    this.toggleAdvancedMode = this.toggleAdvancedMode.bind(this);

    this.state = { editOpen: false };
  }

  onEditOpen = () => {
    console.log('open dialog');
    this.setState({ editOpen: true });
  };

  onEditClose = () => {
    this.setState({ editOpen: false });
  };

  newItem() {
    this.props.newItem(this.props.filterText);
  }

  refresh(filterText) {
    this.props.listItemsAsync(filterText);
  }

  toggleAdvancedMode() {
    this.props.toggleAdvancedMode();
  }

  render() {
    const { filterText, isAdvancedOptions, items } = this.props;
    return (
      <div className={styles.itemWidgetContainer}>
        <Card className={styles.filterBox}>
          <ItemFilter
            filterText={filterText}
            isAdvancedOptions={isAdvancedOptions}
            refresh={this.refresh}
            toggleAdvancedMode={this.toggleAdvancedMode}
          />
          <Button fab color="primary" aria-label="add" className={styles.button} onClick={this.onEditOpen}>
            <AddIcon />
          </Button>
        </Card>
        <Card className={styles.listBox}>
          <ItemList items={items} />
        </Card>
        <EditItemDialog onClose={this.onEditClose} name="new name" open={this.state.editOpen} />
      </div>
    );
  }
}

export default withStyles(styles)(Items);
