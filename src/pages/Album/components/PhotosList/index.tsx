import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {IPhotoItem} from '../../../../core/store/types';

const styles = (theme: any) => {
  return ({
    root: {
      backgroundColor: theme.palette.background.paper,
    }
  });
};

class PhotosGridList extends React.Component<IProps, IState> {

  render() {
    let classes = this.props.classes;
    let list = this.props.list;
    return (
        <div className={classes.root}>
          <GridList cellHeight={300} cols={4}>
            {list.map((photo) => (
                <GridListTile key={photo.id}>
                  <Link to={`/photo/${photo.id}`}>
                    <img src={photo.url} alt={photo.title}/>
                    <GridListTileBar
                        title={photo.title}
                    />
                  </Link>
                </GridListTile>
            ))}
          </GridList>
        </div>
    );
  }

  getImage(id: string):string {
    return 'https://picsum.photos/600/400?random=' + id;
  }
}

export default withStyles(styles)(PhotosGridList);

interface IProps {
  list: IPhotoItem[];
  classes: any,

}

interface IState {
}