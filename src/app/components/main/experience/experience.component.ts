import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from '../../../core/services/translation.service';

interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  activities?: string[];
  technologies: string[];
  website?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  faExternalLink = faExternalLinkAlt;

  experiences: Experience[] = [];
  title = signal<string>('');
  mainActivitiesText = signal<string>('');

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.title.set(this.translationService.translate('experience.title'));
    this.mainActivitiesText.set(this.translationService.translate('experience.mainActivities'));
    
    const experienceList = this.translationService.getTranslations()?.experience?.list || [];
    this.experiences = experienceList.map((exp: any) => ({
      period: exp.period,
      company: exp.company,
      role: exp.role,
      description: exp.description,
      activities: exp.activities || [],
      technologies: exp.technologies || [],
      website: exp.website || '#'
    }));
  }
}
