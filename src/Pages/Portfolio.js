import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { SocialIcon } from "react-social-icons";
import { Projects } from "../Utils/Projects.js";
import { Project } from "../Components/Project.js"






export default function Portfolio(props) {
    return (
        <>
            <h1>My Projects</h1>

            <div className="projects-center" id="portfolio">

                {
                    Projects.map((projects) => {
                        return <Project key={projects.id} {...projects} />
                    })
                }
            </div >
        </>
    )




}