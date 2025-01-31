import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: React.ReactNode
    isActive?: boolean
}

export interface IModal extends React.HTMLAttributes<HTMLDialogElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}