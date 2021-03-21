import * as React from 'react';
import {connect} from 'react-redux';

import {CircularProgress} from '@material-ui/core';
import {
  albumsCreate, albumsDelete,
  albumsGetAll, albumsUpdate,
  selectAlbumsIsLoading,
  selectAlbumsList,
} from '../../core/store/albums';
import {IAlbumItem} from '../../core/store/types';
import AlbumsGridList from './components/AlbumsList';
import {
  selectUsersList,
  selectUsersMap,
  usersGetAll,
} from '../../core/store/users';
import {IUserItem} from '../../core/types';

class AlbumsImpl extends React.Component<IProps, IState> {
  componentDidMount() {
    this.props.getAllAlbums();
    this.props.getAllUsers();
  }

  render() {
    if(this.props.isLoading){
      return <div className="loader-wrap"><CircularProgress className="loader"/></div>
    }
    let records = this.props.albums;
    let usersMap = this.props.usersMap;
    return (
        <div>
          <AlbumsGridList list={records} usersMap={usersMap}/>
        </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: selectAlbumsIsLoading(state),
  albums: selectAlbumsList(state),
  users: selectUsersList(state),
  usersMap: selectUsersMap(state)
});

const mapDispatchToProps = {
  getAllAlbums: albumsGetAll,
  getAllUsers: usersGetAll,
  // addRecord: albumsCreate,
  // updateRecord: albumsUpdate,
  // deleteRecord: albumsDelete,
}

interface IProps {
  isLoading: boolean;
  albums: IAlbumItem[];
  users: IUserItem[];
  usersMap: any;
  getAllAlbums: typeof albumsGetAll;
  getAllUsers: typeof usersGetAll;
  addRecord: typeof albumsCreate;
  updateRecord: typeof albumsUpdate;
  deleteRecord: typeof albumsDelete,
}

interface IState {
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsImpl);