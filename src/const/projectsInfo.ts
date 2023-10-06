export const projects = [
  {
    name: 'Github Proxy',
    deploy: 'https://shawn-full-stack-frontend.vercel.app/',
    description:
      'Projeto Full Stack com TypeScript, Fastify e React. Um proxy para api github mostrar informações de alguns usuários.',
    repos: [
      {
        frontend: 'https://github.com/thiagoleite92/shawn-full-stack-frontend',
        backend: 'https://github.com/thiagoleite92/shawn-full-stack-backend',
      },
    ],
  },
  {
    name: 'Like A Blog',
    deploy: 'https://frontend-posts-nine.vercel.app/home',
    description:
      'Projeto Full Stack com NestJS e React. Um blog com crud de usuário, posts, e autenticação (JWT).',
    repos: [
      {
        frontend: 'https://github.com/thiagoleite92/frontend-posts',
        backend: 'https://github.com/thiagoleite92/backend-posts',
      },
    ],
  },
  {
    name: 'NestJS-DDD-Clean Architecture',
    deploy: '',
    description:
      'Projeto para estudar conceitos de Domain-Drive Design, Clean Architecture, SOLID e aprofundar conhecimentos com NestJS.',
    repos: [
      {
        backend: 'https://github.com/thiagoleite92/nestjs-ddd-clean',
      },
    ],
  },
  {
    name: 'Native Gym App',
    description: 'Estudo de React Native, Native Components e AsyncStorage.',
    deploy: '',
    repos: [
      { frontend: 'https://github.com/thiagoleite92/react-native-gym-app' },
    ],
  },
];
