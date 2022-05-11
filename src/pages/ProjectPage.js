import { motion } from 'framer-motion';
import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import "../style/project.css"
function ProjectPage(props) {
    const { projectRef, controls, downUp, sideIn } = props
    return (
        <div ref={projectRef} id='project'>
            <Container className='project-content-page'>
                <motion.div initial="hidden"
                    animate={controls}
                    variants={downUp} className='page-title'>
                    <p>Tehtud tööd</p>
                </motion.div>
                <div className='project-content'>
                    <ProjectCard controls={controls} sideIn={sideIn} />
                    <ProjectCard controls={controls} sideIn={sideIn} />
                    <ProjectCard controls={controls} sideIn={sideIn} />
                    <ProjectCard controls={controls} sideIn={sideIn} />

                </div>
            </Container>
        </div>
    );
}

export default ProjectPage;