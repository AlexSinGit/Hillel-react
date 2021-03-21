import * as React from 'react';
import {connect} from 'react-redux';
import {
  selectUsersIsLoading, selectUsersList,
  usersCreate, usersDelete,
  usersGetAll, usersUpdate,
} from '../../core/store/users';
import {IUserItem} from '../../core/types';
import UsersList from './components/UsersList';
import {CircularProgress} from '@material-ui/core';

class UsersImpl extends React.Component<IProps, IState> {
  componentDidMount() {
    this.props.getAllRecords();
  }

  render() {
    if(this.props.isLoading){
      return <div className="loader-wrap"><CircularProgress className="loader"/></div>
    }
    let records = this.props.records;
    let addRecord = this.props.addRecord;
    let updateRecord = this.props.updateRecord;
    let deleteRecord = this.props.deleteRecord;
    return (
        <div>
          <UsersList list={records} onAdd={addRecord} onEdit={updateRecord} onDelete={deleteRecord}/>
        </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: selectUsersIsLoading(state),
  records: selectUsersList(state)
});

const mapDispatchToProps = {
  getAllRecords: usersGetAll,
  addRecord: usersCreate,
  updateRecord: usersUpdate,
  deleteRecord: usersDelete,
}

interface IProps {
  isLoading: boolean;
  records: IUserItem[];
  getAllRecords: typeof usersGetAll;
  addRecord: typeof usersCreate;
  updateRecord: typeof usersUpdate;
  deleteRecord: typeof usersDelete,
}

interface IState {
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersImpl);