import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projectImg1 from "../assets/img/mangerine.webp";
import projectImg2 from "../assets/img/us,.webp";
import projectImg3 from "../assets/img/diana kitchen.webp";
import projectImg4 from "../assets/img/vitacore.webp";
import projectImg5 from "../assets/img/tech and co hub.webp";
import projectImg6 from "../assets/img/gumed portal.webp";
import projectImg7 from "../assets/img/locked in.webp";
import projectImg8 from "../assets/img/lockedin assess.webp";     


export const Projects = () => {
  const projects = [
    {
      title: "Mangerine",
      description: "",
      imgUrl: projectImg1,
      technologies: "Laravel · React · SQLite",
    },
    {
      title: "us,",
      description: "A private space for two, where a couple answers a question a day, playsA private space for two, where a couple answers a question a day, plays together and keeps their memories — built so nothing shared arrives before both people are ready for it. together and keeps their memories —built so nothing shared arrives before both people are ready for it.",
      imgUrl: projectImg2,
      technologies: "Django · REST API · JWT",
    },
    {
      title: "diana kitchen",
      description: "",
      imgUrl: projectImg3,
      technologies: "Django · Python · PayPal",
    },
    {
      title: "Vitacore",
      description: "An open-source hospital management system connecting patient care and administration across departments and facilities, built for a Nigerian hospital first.",
      imgUrl: projectImg4,
      technologies: "Django 6.1 · Django REST Framework · Python · PostgreSQL",

    },
    {
      title: "Tech & Co Hub",
      description: "A voucher sales and network management dashboard for a hub in Osun State, built around its Starlink connection and MikroTik router",
      imgUrl: projectImg5,
      technologies: "Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · NestJS 11 · PostgreSQL 18 · Prisma 7 · MikroTik RouterOS API",
    },
    {
      title: "Gumed Portal",
      description: "A university portal connecting admissions, academic records and student finance at Gerar University of Medical Sciences.",
      imgUrl: projectImg6,
      technologies: "Laravel 13 · PHP 8.4 · Laravel Sanctum · Next.js 16 · React 19 · TypeScript · React Query · PostgreSQL",
    },
    {
      title: "Locked In",
      description: "A study app that combines distraction blocking, scheduled sessions and AI-generated quizzes to help students follow through on their study plans.",
      imgUrl: projectImg7,
      technologies: "Tauri · Rust · React · TypeScript · React Native (Expo) · Laravel · Zustand · React Query",
    }  ,    
  { 
      title: "LockedIn Assess",
      description: "A browser-based examination and proctoring platform that verifies candidates, preserves session evidence and keeps the final decision with a human reviewer.",
      imgUrl: projectImg8,
      technologies: "React · Web Platform · Browser Media APIs · Vercel",
    }


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="projects-header">
              <span className="section-label">03 — PROJECTS</span>

              <h2>Selected work.</h2>

              <p>
                A selection of projects I've built while developing my skills
                across frontend, backend, APIs, and full-stack development.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};