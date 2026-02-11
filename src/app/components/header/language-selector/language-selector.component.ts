import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../../core/services/translation.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {
  currentLanguage: Language = 'pt-BR';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }

  isActive(lang: Language): boolean {
    return this.currentLanguage === lang;
  }
}
