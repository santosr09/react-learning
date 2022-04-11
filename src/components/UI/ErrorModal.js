import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  console.log("props.onConfirm): "+props.onConfirm);
  console.log("props.onClick): "+props.onClick);

  // Using Portals
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
  }

  // Using portals
  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    )
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop 
      onClick={props.onClick} />, 
      document.getElementById("backdrop-root"))}
      
      {ReactDOM.createPortal(<ModalOverlay 
      title={props.title} message={props.message} onClick={props.onClick} />, 
      document.getElementById("modal-root"))}
    </React.Fragment>
  );

  // Withouth using PORTALs
  /*  return (
     <div>
       <div className={classes.backdrop} onClick={props.onConfirm} />
       <Card className={classes.modal}>
         <header className={classes.header}>
           <h2>{props.title}</h2>
         </header>
         <div className={classes.content}>
           <p>{props.message}</p>
         </div>
         <footer className={classes.actions}>
           <Button onClick={props.onConfirm}>Okay</Button>
         </footer>
       </Card>
     </div>
   ); */

};

export default ErrorModal;
