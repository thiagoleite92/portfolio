import {
  About,
  Certifications,
  Education,
  Experience,
  Projects,
  Skills,
} from '../components/Sections';

export const navIds = [
  { id: 'sobre', component: <About /> },
  { id: 'habilidades', component: <Skills /> },
  { id: 'experiência', component: <Experience /> },
  {
    id: 'certificações',

    component: <Certifications />,
  },
  { id: 'educação', component: <Education /> },
  { id: 'projetos', component: <Projects /> },
];
