import * as React from 'react';
// import {Theme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {IAlbumItem} from '../../../../core/store/types';

const styles = (theme: any) => {
  return ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    }
  });
};

class AlbumsGridList extends React.Component<IProps, IState> {

  render() {
    let classes = this.props.classes;
    let list = this.props.list;
    return (
        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList} cols={4}>
            {list.map((album) => (
                <GridListTile key={album.id}>
                  <Link to={`/album/${album.id}`}>
                    <img src={this.getImage(album.id)} alt={album.title}/>
                    <GridListTileBar
                        title={album.title}
                        subtitle={
                          <span>Album by: {this.getName(album.userId)}</span>}
                    />
                  </Link>
                </GridListTile>
            ))}
          </GridList>
        </div>
    );
  }

  getName(userId: string): string {
    let usersMap = this.props.usersMap;
    return (typeof usersMap[userId] !== 'undefined')
        ? usersMap[userId].name
        : 'undefined';
  }

  setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

  getImage(id: string):string {
    return `https://via.placeholder.com/600/${this.setBg()}/?r=${id}`;
  }
}

export default withStyles(styles)(AlbumsGridList);

interface IProps {
  list: IAlbumItem[];
  classes: any,
  usersMap: any

}

interface IState {
}