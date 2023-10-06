import {
  About,
  Certifications,
  Education,
  Experience,
  Projects,
  Skills,
} from '../components/Sections';

export const navIds = [
  { title: 'SOBRE', id: 'sobre', component: <About /> },
  { title: 'HABILIDADES', id: 'habilidades', component: <Skills /> },
  { title: 'EXPERIÊNCIA', id: 'experiencia', component: <Experience /> },
  {
    title: 'CERTIFICAÇÕES',
    id: 'certificacoes',
    component: <Certifications />,
  },
  { title: 'EDUCAÇÃO', id: 'educacao', component: <Education /> },
  { title: 'PROJETOS', id: 'projetos', component: <Projects /> },
];
