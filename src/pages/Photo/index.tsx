import './photo.scss';
import * as React from 'react';
import {connect} from 'react-redux';
import {IPhotoItem} from '../../core/store/types';
import {
  photosByID,
  selectPhoto,
  selectPhotoIsLoading,
} from '../../core/store/photos';
import {Button, CircularProgress, Divider, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {ArrowBackIos} from '@material-ui/icons';

class PhotoViewer extends React.Component<IProps, IState>{

  componentDidMount() {
    this.props.getPhotoByID(this.props.match.params.id);
  }

  render() {
    if(this.props.isLoading){
      return <div className="loader-wrap"><CircularProgress className="loader"/></div>
    }
    let photo = this.props.photo;
    return (
        <div className="photo-viewer-wrap content-wrap">
          <div className="title-wrap">
            <Link to={`/album/${photo.albumId}`} className="back-link">
              <Button variant="contained" color="primary" startIcon={<ArrowBackIos/>}>
                Back to album
              </Button>
            </Link>
            <Typography variant="h3" title={photo.title} className="single-photo-title" component="h3" gutterBottom>
              {photo.title}
            </Typography>
          </div>
          <Divider />
          <div className="image-wrapper">
            <img src={photo.url} alt={photo.title}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: selectPhotoIsLoading(state),
  photo: selectPhoto(state),
});

const mapDispatchToProps = {
  getPhotoByID: photosByID,
}

interface IProps {
  isLoading: boolean;
  photo: IPhotoItem;
  getPhotoByID: typeof photosByID;
  match: any
}

interface IState {
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoViewer);