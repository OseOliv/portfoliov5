import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TranslationService } from '../../../core/services/translation.service';

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
export class ProjectComponent implements OnInit {
  faExternalLink = faExternalLinkAlt;
  faGithub = faGithub;

  projects: Project[] = [];
  title = signal<string>('');
  seeMoreText = signal<string>('');

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.title.set(this.translationService.translate('projects.title'));
    this.seeMoreText.set(this.translationService.translate('projects.seeMore'));
    
    const projectsList = this.translationService.getTranslations()?.projects?.list || [];
    this.projects = projectsList.map((project: any) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: this.getImagePath(project.id),
      technologies: project.technologies || [],
      githubLink: this.getGithubLink(project.id)
    }));
  }

  private getImagePath(id: number): string {
    const images: { [key: number]: string } = {
      1: 'assets/projects/mentalaize.png',
      2: 'assets/projects/opmemory.png',
      3: 'assets/projects/imc.png'
    };
    return images[id] || 'assets/projects/default.png';
  }

  private getGithubLink(id: number): string {
    const links: { [key: number]: string } = {
      1: 'https://mentalaize.com.br/',
      2: 'https://op-memory-game.vercel.app/',
      3: 'https://imc-app-ts.vercel.app/'
    };
    return links[id] || '';
  }

  navigateToGithub(url: string): void {
    window.open(url, '_blank');
  }

  viewMoreProjects(): void {
    window.open('https://github.com/OseOliv', '_blank');
  }
}
