import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.scss';
import Card from './Card';
import Button from './Button';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onErrorModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorModal}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorModal={props.onErrorModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onErrorModal={props.onErrorModal}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
