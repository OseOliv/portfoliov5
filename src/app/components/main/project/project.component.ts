import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  faExternalLink = faExternalLinkAlt;
  faGithub = faGithub;

  projects: Project[] = [
        {
      id: 1,
      title: 'Mentalaize',
      description:
        'A Mentalaize é uma plataforma de gestão de risco psicológico para empresas que utiliza inteligência artificial para monitorar, analisar e promover a saúde emocional dos colaboradores.',
      image: 'assets/projects/mentalaize.png',
      technologies: ['Ruby On Rails', 'Tailwind', 'IA', 'Typebot'],
      githubLink: 'https://mentalaize.com.br/',
    },
    {
      id: 2,
      title: 'OP:Memory Game',
      description:
        'Este é um jogo da memória envolvendo os adorados personagens da série One Piece',
      image: 'assets/projects/opmemory.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://op-memory-game.vercel.app/',
    },
    {
      id: 3,
      title: 'IMC App',
      description:
        'Um aplicativo para calcular o Índice de Massa Corpórea (IMC)',
      image: 'assets/projects/imc.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://imc-app-ts.vercel.app/',
    },
  ];

  navigateToGithub(url: string): void {
    window.open(url, '_blank');
  }

  viewMoreProjects(): void {
    window.open('https://github.com/OseOliv', '_blank');
  }
}
