import React, {BaseSyntheticEvent, useRef} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {IUserItem} from '../../core/store/types';
import {DialogContent, TextField} from '@material-ui/core';
import './styles.scss';
import SimpleReactValidator from 'simple-react-validator';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
    }),
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddEditUserDialog(props: IAddEditProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const initUser = {
    id: '', name: '', username: '', email: '', phone: ''
  }
  const [formData, setFormData] = React.useState(initUser);
  const simpleValidator = useRef(new SimpleReactValidator());

  React.useEffect(() => {
    (props.isOpen)? setOpen(true): setOpen(false);
  }, [props.isOpen]);

  React.useEffect( () => {
    if(typeof props.editUser !== 'string') setFormData({...props.editUser});
  }, [props.editUser]);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
    setFormData(initUser);
    simpleValidator.current.purgeFields();
  }

  const changeHandler = (e: BaseSyntheticEvent) => {
    setFormData({
        ...formData,
      [e.target.attributes.name.value]: e.target.value
    });
    validate(e.target.attributes.name.value);
  }

  const saveHandler = () => {
    props.onSave({...formData});
    handleClose();
  }

  const validate = (name: string) => {
    simpleValidator.current.showMessageFor(name);
  }

  return (
      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {props.actionType} user
              </Typography>
              <Button autoFocus disabled={!simpleValidator.current.allValid()} color="inherit" onClick={saveHandler}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <form>
              <TextField onChange={changeHandler} name="name"
                         value={formData.name} id="outlined-basic" label="Name"
                         variant="outlined" fullWidth margin="dense"/>
              {simpleValidator.current.message('name', formData.name, 'required')}
              <TextField onChange={changeHandler} name="username"
                         value={formData.username} id="outlined-basic"
                         label="Username" variant="outlined" fullWidth
                         margin="dense"/>
              {simpleValidator.current.message('username', formData.username, 'required')}
              <TextField onChange={changeHandler} name="email"
                         value={formData.email} id="outlined-basic"
                         label="Email" variant="outlined" fullWidth
                         margin="dense"/>
              {simpleValidator.current.message('email', formData.email, 'required|email')}
              <TextField onChange={changeHandler} name="phone"
                         value={formData.phone} id="outlined-basic"
                         label="Phone" variant="outlined" fullWidth
                         margin="dense"/>
              {simpleValidator.current.message('phone', formData.phone, 'required|phone')}
            </form>
            </DialogContent>
        </Dialog>
      </div>
  );
}

interface IAddEditProps {
  isOpen: boolean,
  editUser: IUserItem | string,
  onClose: () => void,
  title?: string,
  onSave: (user: IUserItem) => void,
  actionType: string
}