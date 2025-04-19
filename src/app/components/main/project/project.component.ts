import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'OP:Memory Game',
      description:
        'Este é um jogo da memória envolvendo os adorados personagens da série One Piece',
      image: 'opmemory.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://github.com/OseOliv/op-memory-game',
    },
    {
      id: 2,
      title: 'IMC App',
      description:
        'Um aplicativo para calcular o Índice de Massa Corpórea (IMC)',
      image: 'imc.png',
      technologies: ['React.js', 'CSS', 'TypeScript'],
      githubLink: 'https://github.com/OseOliv/op-memory-game',
    }
  ];

  navigateToGithub(url: string): void {
      window.open(url, '_blank');
  }
}
