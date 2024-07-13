import React from 'react'
import ProjectCard from './ProjectCard'
import '../app.css'
import '../style.css'

function ProjectList() {
  const projects = [
      { id: 1, projectName: "Bank Management System", description: "The Bank Management System project is a comprehensive software solution designed to streamline the day-to-day operations of a bank. This project encompasses key functionalities such as customer management, account management and transaction processing.", img: "../../src/assests/Bank.webp" },
      { id: 2, projectName: "Student Management System", description: "The Student Management System project is a comprehensive software application designed to streamline the management of educational institutions. It encompasses essential functionalities such as student enrollment, course management and student details management.", img: "../../src/assests/student.png" },
      { id: 3, projectName: "FlaskBlog", description: "a full-stack web application built using Flask, a Python micro-framework. This project showcases fundamental concepts in web development, including database integration, user authentication, andd CRUD operations.", img: "../../src/assests/flask.webp" },
      { id: 4, projectName: "Attendify", description: "Attendify is an innovative automated attendance management system that utilizes computer vision technology to streamline the process of tracking attendance. This full-stack web application integrates user authentication and database management to provide a robust solution for educational institutions and organizations.", img: "../../src/assests/attendance.jpg" }
  ];

  return (
      <section className='flex flex-col justify-center items-center mt-4'>
          <h1 className='tracking-wider' style={{letterSpacing: '0.1em'}}>PROJECTS</h1>
          {projects.map((p) => (
              <ProjectCard key={p.id} projectName={p.projectName} desc={p.description} img={p.img} />
          ))}
      </section>
  );
}

export default ProjectList;
