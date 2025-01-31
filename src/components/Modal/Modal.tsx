import React, {useEffect, useRef} from 'react';
import './Modal.css'
import {IModal} from "../../interfaces/props.tsx";
import {createPortal} from "react-dom";
import Button from "../Button/Button.tsx";

const Modal: React.FC<IModal> = ({ children, isOpen, onClose, ...props }) => {
    const rootModalRef = useRef<HTMLDialogElement | null>(null);
    const contentModalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (rootModalRef.current) {
            if (isOpen) {
                rootModalRef.current?.showModal();
            } else {
                rootModalRef.current?.close();
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (contentModalRef.current && !contentModalRef.current.contains(target)) {
                rootModalRef.current?.close();
                if (typeof onClose === 'function') {
                    onClose();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <dialog className={'modal_root'} ref={rootModalRef} {...props}>
            <div className="modal_content" ref={contentModalRef}>
                <div className={'modal_button'}>
                    <Button onClick={() => rootModalRef.current?.close()}>X</Button>
                </div>
                {children}
            </div>
        </dialog>,
        document.getElementById('modal') as HTMLElement
    );
};

export default Modal;