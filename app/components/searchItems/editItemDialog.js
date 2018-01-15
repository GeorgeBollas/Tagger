import React from 'react';
import Button from 'material-ui/Button';
import { Form, Control, Errors } from 'react-redux-form';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

export const EDIT_ITEM_DIALOG_MODE_CREATE = 'C';
export const EDIT_ITEM_DIALOG_MODE_EDIT = 'E';

const MUITextInput = (props) => <TextField {...props} />;
const required = (val) => val && val.length;

export default class editItemDialog extends React.Component {
  props: {
    name: string,
    open: boolean,
    mode: string,
    onClose: () => void
  }

  // constructor(props, defaultProps) {
  //   super(props, defaultProps);
  // }

  static defaultProps = {
    mode: EDIT_ITEM_DIALOG_MODE_CREATE,
  };

  open() {
    console.log('edit called');
    this.handleClickOpen();
  }

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const { mode } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Item</DialogTitle>
          <DialogContent>
            <Form model="item" onSubmit={(item) => this.onClose(item)}>
              <div>
                <Control.text
                  model=".name"
                  component={MUITextInput}
                  label="Name"
                  validators={{
                    required
                  }}
                />
                <Errors
                  className="errors"
                  model="item.name"
                  show="touched"
                  messages={{
                    required: 'name is required',
                  }}
                />
              </div>
            </Form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="accent">
              Cancel
            </Button>
            <Button onClick={this.onClose} color="primary">
              {mode && mode === EDIT_ITEM_DIALOG_MODE_CREATE ? 'Create' : 'Edit'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
