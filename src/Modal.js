import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

function Modal(props) {
  const { open, onClose: handleClose, title } = props;

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="modal-dialog-title">
      {title && <DialogTitle id="modal-dialog-title">{title}</DialogTitle>}

      <DialogContent>
        {props.children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;