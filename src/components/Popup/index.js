import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Popup = (props) => {
  const handleAfterOpen = () => document.body.style.overflow = 'hidden';
  const handleAfterClose = () => document.body.style.overflow = 'auto';

  return (
    <Modal
      isOpen={props.isVisible}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
    >
      {props.children}
    </Modal>
  );
};

export default Popup;
