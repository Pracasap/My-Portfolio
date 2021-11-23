import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderIcons(prop) {
    let weblinks = [];
    const webLinkKeys = ['website', 'github', 'codepen'];
    const {project} = prop
    
    webLinkKeys.forEach((linkKey) => {
        if (project[linkKey]) {
            const icon = linkKey === 'website' ? 'earth': `logo-${linkKey}`
            const link = <a href={prop.project[linkKey]} target="_blank" rel="noreferrer" style={{paddingRight: 10}}><ion-icon name={icon} /></a>;
            weblinks.push(link);
        }
    })
    return weblinks;
}

const RenderProjects = ({project}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={project.image} alt={project.name} />
            </div>
            <CardBody>
            <CardTitle>{project.name}</CardTitle>
            <CardText>{project.description}</CardText>
            <hr />
            <div className="card-icon">
                <RenderIcons project={project} />
            </div>
            </CardBody>
        </Card>
    )
}

function Projects(props) {
    const projects = props.projects.map(project => {
        return (
            <div key={project.id} className="col-md-6 p-3">
                <RenderProjects project={project} />
            </div>
        )
    })
    return (
        <div className="container-fluid home">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-3 mt-md-5 mb-1">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row projects" style={{borderRadius: 2}}>
                        {projects}
                </div>
            </div>
        </div>
    )
}

export default Projects;
