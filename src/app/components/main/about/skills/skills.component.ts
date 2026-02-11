import { Component, OnInit, signal } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  description = signal<string>('');
  
  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Ruby',
    'Python',
    'TypeScript',
    'Node.js',
    'Ruby on Rails',
    'React.js',
    'React',
    'Angular',
    'Nest.js',
    'Tailwind',
    'SQLite',
    'Firebase',
    'PostgreSQL',
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.description.set(this.translationService.translate('about.skills.description'));
  }
}
