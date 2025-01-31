import React, {useEffect, useState} from 'react';
import Button from "../../components/Button/Button.tsx";
import Modal from "../../components/Modal/Modal.tsx";
import './CreateProject.css'
import useInput from "../../hooks/useInput.tsx";
import {IProjects} from "../../interfaces/projects.tsx";
import {InitStorage} from "../../api/InitStorage.tsx";

const CreateProject: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const newProjectName = useInput('', {})

    const localStr = localStorage.getItem('projects');
    const projects: IProjects | null = localStr ? JSON.parse(localStr) : null;

    useEffect(() => {
        if (!localStr) {
            localStorage.setItem('projects', JSON.stringify(InitStorage))
        }
    }, []);

    const handleCloseEscape = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            setOpenModal(false)
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={'projects_create'}>
            <div>
                <Button onClick={() => setOpenModal(true)}>Создать проект</Button>
            </div>
            <Modal isOpen={openModal} onKeyDown={handleCloseEscape} onClose={handleCloseModal}>
                <div className={'project_create_modal'}>
                    <div>
                        <label>Введите название проекта:
                            <input placeholder={'Project Name'} value={newProjectName.value} onChange={(e) => newProjectName.onChange(e)}/>
                        </label>
                    </div>
                    <div className={'project_createBtn_modal'}>
                        <Button>Создать</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CreateProject;