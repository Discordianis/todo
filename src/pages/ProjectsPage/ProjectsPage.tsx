import React from 'react';
import CreateProject from "../../features/CreateProject/CreateProject.tsx";
import ProjectsList from "../../features/ProjectsList/ProjectsList.tsx";

const ProjectsPage: React.FC = () => {

    return (
        <div className={'projects_root'}>
            <div className={'projects_content'}>
                <CreateProject />
                <ProjectsList />
            </div>
        </div>
    );
}

export default ProjectsPage;