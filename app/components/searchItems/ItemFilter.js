// @flow
import React, { Component } from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import TextField from 'material-ui/TextField';
import debounce from 'lodash/debounce';
import IconButton from 'material-ui/IconButton';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

const MUITextInput = (props) => <TextField {...props} />;

const required = (val) => val && val.length;

class ItemFilter extends Component {
  props: {
    filterText: string,
    isAdvancedOptions: boolean,
    toggleAdvancedMode: () => void,
    refresh: (filterText: string) => void
  };


  constructor(props) {
    super(props);

    this.handleChange = debounce(this.handleChange, 1000);
    this.handleAdvancedOptionsClick = this.handleAdvancedOptionsClick.bind(this);
  }


  handleChange(filter) {
    const { refresh } = this.props;
    refresh(filter.filterText);
  }

  handleSubmit(filter) {
    const { refresh } = this.props;
    refresh(filter.filterText);
  }

  handleAdvancedOptionsClick() {
    const { toggleAdvancedMode } = this.props;
    toggleAdvancedMode();
  }

  render() {
    const isAdvancedOptions = this.props.isAdvancedOptions;
    let ao = null;

    if (isAdvancedOptions) {
      ao = <div>rest of controls</div>;
    }

    return (
      <div>
        <Form model="filter" onSubmit={(filter) => this.handleSubmit(filter)} onChange={(filter) => this.handleChange(filter)}>
          <div>
            <Control.text
              model=".filterText"
              component={MUITextInput}
              label="Search"
              validators={{
                required
              }}
            />
            <Errors
              className="errors"
              model="filter.filterText"
              show="touched"
              messages={{
                required: 'filter is required',
              }}
            />
            <IconButton onClick={this.handleAdvancedOptionsClick} >
              <AddShoppingCartIcon />
            </IconButton>
            {ao}
          </div>
        </Form>
      </div>
    );
  }
}

export default ItemFilter;
