import { useModal } from '../hooks/useModal';
import { Modal } from './Modal';
import '../assets/css/styles.css';
import '../assets/css/modal.css';

export const GifItem = ({title, url }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <div className='card'>
            <div onClick={openModal} style={{cursor:'pointer'}}>
            <img src={url} alt="gif" />
            {/* <p>{title}</p>*/}
            </div>
            
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                
                <img className='modal-img' src= {url} alt="gif" />
                <p>{title}</p>
                
            </Modal>
            </div>
    );
};
