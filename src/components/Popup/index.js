import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useAtomValue } from 'jotai';
import { isPopupVisibleAtom } from '../../state/atoms';

Modal.setAppElement('#root');

const Popup = (props) => {
  const handleAfterOpen = () => document.body.style.overflow = 'hidden';
  const handleAfterClose = () => document.body.style.overflow = 'auto';
  const isPopupVisible = useAtomValue(isPopupVisibleAtom);

  return (
    <Modal
      isOpen={isPopupVisible}
      onAfterOpen={handleAfterOpen}
      onAfterClose={handleAfterClose}
      className="absolute top-0 left-0 bottom-0 right-0 top-2-ns left-2-ns bottom-2-ns right-2-ns
        w-70-m w-50-l center-ns overflow-y-auto bg-washed-yellow br2"
    >
      {props.children}
    </Modal>
  );
};

Popup.propTypes = {
  children: PropTypes.element,
};

export default Popup;
