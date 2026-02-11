import { Component, OnInit, signal } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileImage = 'assets/images/profile.jpeg';
  profileNameLogo = 'assets/logo/logo-nome-perfil.svg';
  
  subtitle = signal<string>('');
  description = signal<string>('');

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.loadTranslations();
    this.translationService.currentLanguage$.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations(): void {
    this.subtitle.set(this.translationService.translate('header.profile.subtitle'));
    this.description.set(this.translationService.translate('header.profile.description'));
  }
}
