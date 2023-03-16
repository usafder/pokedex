import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { isPopupVisibleAtom } from 'state/atoms';

Modal.setAppElement('#root');

const Popup = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useAtom(isPopupVisibleAtom);
  const hidePopup = () => setIsPopupVisible(false);
  const handleAfterOpen = () => document.body.style.overflow = 'hidden';
  const handleAfterClose = () => document.body.style.overflow = 'auto';

  return (
    <Modal
      isOpen={isPopupVisible}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
      className="absolute top-0 left-0 bottom-0 right-0 top-2-ns left-2-ns bottom-2-ns right-2-ns
        w-70-m w-50-l center-ns overflow-y-auto bg-washed-yellow br2"
    >
      <button
        aria-label="close"
        className="absolute top-0 right-0 mt2 mr2 fw6 ba br-100 b--black-10 bg-dark-gray near-white dim pointer"
        onClick={hidePopup}
      >
        &times;
      </button>
      {props.children}
    </Modal>
  );
};

Popup.propTypes = {
  children: PropTypes.element,
};

export default Popup;
