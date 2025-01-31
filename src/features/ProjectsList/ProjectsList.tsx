import React, {useEffect, useState} from 'react';
import {InitStorage} from "../../api/InitStorage.tsx";
import {IProjectInfo} from "../../interfaces/projects.tsx";
import './ProjectList.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.tsx";
import {addProjectAction, removeProjectAction} from "../../store/projects.tsx";
import Button from "../../components/Button/Button.tsx";

const ProjectsList: React.FC = () => {

    const localStr = localStorage.getItem('projects');
    const projects = useSelector((state: RootState) => state.projects);

    const dispatch = useDispatch();
    const [checkedList, setCheckedList] = useState<number[]>([])

    useEffect(() => {
        if (!localStr) {
            localStorage.setItem('projects', JSON.stringify(InitStorage))
            dispatch(addProjectAction(Object.values(InitStorage)));
        }
    }, []);

    const handleCheckedProject = (id: number) => {
        setCheckedList(prev => {
            if (prev.includes(id)) {
                return prev.filter(filter => filter !== id)
            }
            else {
                return [...prev, id]
            }
        })
    }

    const deleteProject = () => {
        dispatch(removeProjectAction(checkedList))
    }

    useEffect(() => {
        console.log(checkedList)
    }, [checkedList]);

    useEffect(() => {
        console.log(projects)
    }, []);

    return (
        <>
            {checkedList.length > 0 &&
                <div className={'delete_prj_button'}>
                    <Button onClick={deleteProject}>Удалить проект(-ы)</Button>
                </div>
            }
            <div className={'projects_list_root'}>
                <div className={'projects_list_table'}>
                    <div className={'projects_list_top'}>
                        <div className={'table_checkbox'}></div>
                        <span className={'table_name'}>Название проекта</span>
                        <span className={'table_status'}>Статус</span>
                        <span className={'table_creator'}>Автор</span>
                    </div>
                    <div className={'projects_list_down'}>
                        {projects && Object.values(projects).map((project) => {
                            const proj = project as IProjectInfo;
                            return (
                                <div key={proj?.id}>
                                    <div className={'table_checkbox'}>
                                        <input type="checkbox" onChange={() => handleCheckedProject(proj?.id)} />
                                    </div>
                                    <div className={'projects_list_down_sub'}>
                                        <NavLink to={`/project/${proj?.id}`} className={'table_name'}>{proj?.name}</NavLink>
                                        <select className={'table_status'}>
                                            <option value="pending">В ожидании</option>
                                            <option value="dev">В работе</option>
                                            <option value="ended">Завершён</option>
                                        </select>
                                        <span className={'table_creator'}>{proj?.creator}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsList;