import * as React from 'react';
import {
  Avatar, createStyles, Divider, IconButton,
  ListItem,
  ListItemAvatar, ListItemSecondaryAction,
  ListItemText, makeStyles, Theme, Typography,
} from '@material-ui/core';
import {IUserItem} from '../../../../core/types';

import {Delete, Edit} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      inline: {
        display: 'inline',
      },
      bold: {
        fontWeight: 'bold'
      }
    }),
);

export function UserItem(props: IProps) {
  const classes = useStyles();

  const getNameAbbreviation = (name: string):string => {
    let [firstName, lastName] = name.split(' ');
    try {
      if(!lastName){
        return firstName[0];
      }else {
        return firstName[0] + lastName[0];
      }
    }catch(e){
      return '__';
    }
  }

  return (
      <span>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={props.item.name}>{getNameAbbreviation(props.item.name)}</Avatar>
          </ListItemAvatar>
          <ListItemText
              primary={props.item.name}
              secondary={
                <React.Fragment>
                  <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                  >
                  </Typography>
                  <span><b className={classes.bold}>Email:&nbsp;</b></span><span>{props.item.email}</span>
                  &nbsp;
                  <span><b className={classes.bold}>Phone:&nbsp;</b></span><span>{props.item.phone}</span>
                </React.Fragment>
              }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => {props.onEdit(props.item);}}>
                <Edit/>
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => {props.onDelete(props.item);}}>
                <Delete/>
              </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider/>
      </span>
  );
}

interface IProps {
  item: IUserItem,
  onEdit: (user: IUserItem) => void
  onDelete: (user: IUserItem) => void
}