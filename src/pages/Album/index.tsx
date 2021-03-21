import * as React from 'react';
import {connect} from 'react-redux';
import {IAlbumItem, IPhotoItem} from '../../core/store/types';
import {
  photosByAlbumID,
  selectPhotosIsLoading,
  selectPhotosList,
} from '../../core/store/photos';
import PhotosGridList from './components/PhotosList';
import {Button, CircularProgress, Divider, Typography} from '@material-ui/core';
import {
  albumByID,
  selectAlbum,
  selectAlbumIsLoading,
} from '../../core/store/albums';
import {ArrowBackIos} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import './album.scss';

class Album extends React.Component<IProps, IState>{

  componentDidMount() {
    this.props.getPhotosByAlbumID(this.props.match.params.id);
    this.props.getAlbumByID(this.props.match.params.id);
  }

  render(){
    if(this.props.isLoading){
      return <div className="loader-wrap"><CircularProgress className="loader"/></div>
    }
    let photos = this.props.photos;
    let album = this.props.album;
    return (
        <div className="content-wrap">
          {this.getAlbumTitle(album)}
          <Divider />
          <div className="photo-grid-list-wrap">
            <PhotosGridList list={photos}/>
          </div>
        </div>
    );
  }

  getAlbumTitle(album: IAlbumItem){
    if(this.props.albumIsLoading){
      return <div className="loader-wrap"><CircularProgress className="loader"/></div>
    }else{
      return (
          <div className="album-name-wrap">
            <Link to={`/albums`} className="back-link">
              <Button variant="contained" color="primary" startIcon={<ArrowBackIos/>}>
                Back to albums
              </Button>
            </Link>
            <Typography variant="h5" title={album.title} className="single-photo-title" component="h5" gutterBottom>
              Album name: {album.title}
            </Typography>
          </div>
      )
    }
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: selectPhotosIsLoading(state),
  photos: selectPhotosList(state),
  albumIsLoading: selectAlbumIsLoading(state),
  album: selectAlbum(state)
});

const mapDispatchToProps = {
  getPhotosByAlbumID: photosByAlbumID,
  getAlbumByID: albumByID
}

interface IProps {
  isLoading: boolean;
  photos: IPhotoItem[];
  albumIsLoading: boolean;
  album: IAlbumItem;
  getPhotosByAlbumID: typeof photosByAlbumID;
  getAlbumByID: typeof albumByID;
  match: any;
}

interface IState {
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);