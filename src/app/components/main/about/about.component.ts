import { Component, OnInit, signal } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-about',
  imports: [SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  title = signal<string>('');
  greeting = signal<string>('');
  name = signal<string>('');
  intro = signal<string>('');
  passion = signal<string>('');
  currentFocus = signal<string>('');
  callToAction = signal<string>('');

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.title.set(this.translationService.translate('about.title'));
    this.greeting.set(this.translationService.translate('about.greeting'));
    this.name.set(this.translationService.translate('about.name'));
    this.intro.set(this.translationService.translate('about.intro'));
    this.passion.set(this.translationService.translate('about.passion'));
    this.currentFocus.set(this.translationService.translate('about.currentFocus'));
    this.callToAction.set(this.translationService.translate('about.callToAction'));
  }
}
