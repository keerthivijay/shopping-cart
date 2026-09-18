import ReactDom from 'react-dom'
import './Modal.css'

function Modal({ open, setOpen, message }) {

    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <div className='modal-message'>
                        <span>{message}</span>
                    </div>
                    <div className='modal-close'><a onClick={() => setOpen(false)}>X</a></div>
                </div>
            </div>
        </>,
        document.getElementById('portals')
    );
}

export default Modal;