import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
