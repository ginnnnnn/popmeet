import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    '& .MuiDialog-paper': {
      borderRadius: 15,
    },
  },
});

function SimpleDialog({ onClose, children, open }) {
  const classes = useStyles();
  return (
    <Dialog
      className={classes.root}
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {children}
    </Dialog>
  );
}

export default SimpleDialog;
