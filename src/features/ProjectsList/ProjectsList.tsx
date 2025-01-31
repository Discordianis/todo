import React, {useEffect, useState} from 'react';
import {InitStorage} from "../../api/InitStorage.tsx";
import {IProjectInfo, IProjects} from "../../interfaces/projects.tsx";
import './ProjectList.css'
import {NavLink} from "react-router-dom";

const ProjectsList: React.FC = () => {

    const localStr = localStorage.getItem('projects');
    const projects: IProjects | null = localStr ? JSON.parse(localStr) : null;

    const [checkedList, setCheckedList] = useState<number[]>([])

    useEffect(() => {
        if (!localStr) {
            localStorage.setItem('projects', JSON.stringify(InitStorage))
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

    useEffect(() => {
        console.log(checkedList)
    }, [checkedList]);

    return (
        <div className={'projects_list_root'}>
            <div className={'projects_list_table'}>
                <div className={'projects_list_top'}>
                    <div className={'table_checkbox'}></div>
                    <span className={'table_name'}>Название проекта</span>
                    <span className={'table_status'}>Статус</span>
                    <span className={'table_creator'}>Автор</span>
                </div>
                <div className={'projects_list_down'}>
                {projects && Object.values(projects.info).map((project: IProjectInfo) => (
                    <>
                        <div className={'table_checkbox'}>
                            <input type={"checkbox"} onChange={() => handleCheckedProject(project?.id)}/>
                        </div>
                        <div className={'projects_list_down_sub'}>
                            <NavLink to={`/project/${project?.id}`} key={project.id} className={'table_name'}>{project.name}</NavLink>
                            <select className={'table_status'}>
                                <option value={'pending'}>В ожидании</option>
                                <option value={'dev'}>В работе</option>
                                <option value={'ended'}>Завершён</option>
                            </select>
                            <span className={'table_creator'}>{project.creator}</span>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </div>

    );
}

export default ProjectsList;