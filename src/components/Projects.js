import React from 'react';
import ProjectItem from './ProjectItem';
import reactadmin from '../../public/assets/projects/reactadmin.png'
import budgetplanner from '../../public/assets/projects/budgetplanner.png'
import todoapp from '../../public/assets/projects/todoapp.png'
import fooddelivery from '../../public/assets/projects/fooddelivery.png'

function Projects() {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title='React Admin' backgroundImg={reactadmin} projectUrl='/reactadmin' tech='Vite' />
          <ProjectItem title='Budget Planner' backgroundImg={budgetplanner} projectUrl='/budgetplanner' tech='React JS' />
          <ProjectItem title='Todo App' backgroundImg={todoapp} projectUrl='/todoapp' tech='React JS' />
          <ProjectItem title='Food Delivery App' backgroundImg={fooddelivery} projectUrl='/fooddelivery' tech='Next JS' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
