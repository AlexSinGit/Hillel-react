import * as React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography, Button,
} from '@material-ui/core';

import {AccountCircle} from '@material-ui/icons';
import PhotoAlbumTwoToneIcon from '@material-ui/icons/PhotoAlbumTwoTone';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      link: {
        textDecoration: 'none !important',
      },
      root: {
        flexGrow: 1,
        position: 'relative',
        zIndex: 10
      },
      headerTitle: {
        flexGrow: 1,
      },
      button: {
        margin: theme.spacing(1),
        boxShadow: 'none',
        outline: 'none !important',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    }),
);

export function Header() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.headerTitle}>
              Admin panel
            </Typography>
            <Link to="/" className={classes.link}>
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<AccountCircle/>}
              >
                Users
              </Button>
            </Link>
            <Link to="/albums" className={classes.link}>
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<PhotoAlbumTwoToneIcon/>}
              >
                Albums
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
  );
}
