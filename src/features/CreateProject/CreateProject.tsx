import React, { useState } from 'react';
import Button from "../../components/Button/Button.tsx";
import Modal from "../../components/Modal/Modal.tsx";
import './CreateProject.css';
import useInput from "../../hooks/useInput.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store.tsx";
import { addProjectAction } from "../../store/projects.tsx";

const CreateProject: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const newProjectName = useInput('', {});
    const dispatch = useDispatch();

    const projects = useSelector((state: RootState) => state.projects);

    const addNewProject = () => {
        const maxId = Object.keys(projects ?? {}).length + 1;
        const newProject = {
            id: maxId,
            name: newProjectName.value,
            status: "new",
            creator: "Пользователь",
            tasks: {},
        };

        const updatedProjects = { ...projects, [maxId]: newProject };
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        dispatch(addProjectAction(newProject));
        setOpenModal(false);
        newProjectName.setValue('')
    };

    const handleCloseEscape = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            setOpenModal(false);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div className={'projects_create'}>
            <div>
                <Button onClick={() => setOpenModal(true)}>Создать проект</Button>
            </div>
            <Modal isOpen={openModal} onKeyDown={handleCloseEscape} onClose={handleCloseModal}>
                <div className={'project_create_modal'}>
                    <div>
                        <label>Введите название проекта:
                            <input
                                placeholder={'Project Name'}
                                value={newProjectName.value}
                                onChange={(e) => newProjectName.onChange(e)}
                            />
                        </label>
                    </div>
                    <div className={'project_createBtn_modal'}>
                        <Button onClick={addNewProject}>Создать</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CreateProject;
