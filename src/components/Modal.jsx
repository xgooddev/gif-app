
import '../assets/css/modal.css'

export const Modal = ({childen, isOpen, closeModal}) => {
    return (
        <article className={`modal ${isOpen && 'is-open'}`}>
            <div className='modal-container'>
            {childen}
           <button className='btn-modal-close' onClick={closeModal}>X</button>
           
           </div>
        </article>
    );
}