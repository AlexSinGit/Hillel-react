import * as React from 'react';
import {IUserItem} from '../../../../core/types/';
import {UserItem} from '../UserItem';
import {Fab, List, withStyles} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import AddEditUserDialog from '../../../../components/AddEditUserDialog';

const styles = (theme: any) => {
  return ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
      right: '15px',
      bottom: '15px'
    }
  });
};

class UsersList extends React.Component<IProps, IState> {
  state: IState = {
    editItem: '',
    AddDialogIsOpen: false,
    popupType: 'Add'
  };

  constructor(props: IProps) {
    super(props);
    this.addDialogClickHandler = this.addDialogClickHandler.bind(this);
    this.closeAddDialogClickHandler = this.closeAddDialogClickHandler.bind(this);
    this.saveAddDialogUserHandler = this.saveAddDialogUserHandler.bind(this);
    this.itemEditHandler = this.itemEditHandler.bind(this);
    this.itemDeleteHandler = this.itemDeleteHandler.bind(this);
  }

  addDialogClickHandler(){
    this.setState({
        ...this.state,
      AddDialogIsOpen: true,
      popupType: 'Add'
    });
  }

  closeAddDialogClickHandler(){
    this.setState({
      ...this.state,
      AddDialogIsOpen: false
    });
  }

  saveAddDialogUserHandler(user: IUserItem){
    if(user.id !== ''){
      this.props.onEdit(user);
    }else {
      this.props.onAdd(user);
    }
  }

  itemEditHandler(user: IUserItem) {
    this.setState({
      ...this.state,
      AddDialogIsOpen: true,
      editItem: user,
      popupType: 'Edit'
    });
  }

  itemDeleteHandler(user: IUserItem) {
    this.props.onDelete(user);
  }



  render() {
    let items = this.props.list;
    let classes = this.props.classes;
    return (
        <div>
          <List className={classes.root}>
            {this.renderItems(items)}
          </List>
          <Fab color="primary" className="float-button" aria-label="add" onClick={this.addDialogClickHandler}>
            <Add />
          </Fab>
          <AddEditUserDialog
              isOpen={this.state.AddDialogIsOpen}
              editUser={this.state.editItem}
              actionType={this.state.popupType}
              onClose={this.closeAddDialogClickHandler}
              onSave={this.saveAddDialogUserHandler}
          />
        </div>
    );
  }

  renderItems(items: any) {
    return items.map((item: any) => {
      return <UserItem key={item.id} item={item} onDelete={this.itemDeleteHandler} onEdit={this.itemEditHandler}/>;
    });
  }
}

export default withStyles(styles)(UsersList);

interface IProps {
  list: IUserItem[],
  classes: any,
  onAdd: (user: IUserItem) => void
  onEdit: (user: IUserItem) => void
  onDelete: (user: IUserItem) => void
}

interface IState {
  editItem: IUserItem | string,
  AddDialogIsOpen: boolean,
  popupType: string
}