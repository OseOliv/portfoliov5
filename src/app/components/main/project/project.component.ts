import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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

  projects: Project[] = [
    {
      id: 1,
      title: 'Portfólio V3 (oseasoliveira.com)',
      description:
        'Esta é uma versão anterior do meu portfólio. Mantenho disponível para fins de comparação e para mostrar a evolução do meu trabalho ao longo do tempo.',
      image: 'assets/projects/portfoliov3.png',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/OseOliv/portfoliov3',
    },
    {
      id: 2,
      title: 'OP:Memory Game',
      description:
        'Este é um jogo da memória envolvendo os adorados personagens da série One Piece',
      image: 'assets/projects/opmemory.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://github.com/OseOliv/op-memory-game',
    },
    {
      id: 3,
      title: 'IMC App',
      description:
        'Um aplicativo para calcular o Índice de Massa Corpórea (IMC)',
      image: 'assets/projects/imc.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://github.com/OseOliv/IMC-APP-TS',
    },
  ];

  navigateToGithub(url: string): void {
    window.open(url, '_blank');
  }

  viewMoreProjects(): void {
    window.open('https://github.com/OseOliv', '_blank');
  }
}
