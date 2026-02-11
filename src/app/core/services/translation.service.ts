import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export type Language = 'pt-BR' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLanguageSubject = new BehaviorSubject<Language>('pt-BR');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  
  // Signal para reatividade
  public currentLanguage = signal<Language>('pt-BR');
  
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(private http: HttpClient) {
    // Carrega o idioma inicial apenas no browser
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('selectedLanguage') as Language;
      const initialLang = (savedLang && (savedLang === 'pt-BR' || savedLang === 'en')) ? savedLang : 'pt-BR';
      this.currentLanguageSubject.next(initialLang);
      this.currentLanguage.set(initialLang);
    }
    this.loadSavedLanguage();
  }

  /**
   * Carrega o idioma salvo do localStorage ou usa pt-BR como padrão
   */
  private loadSavedLanguage(): void {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('selectedLanguage') as Language;
      if (savedLang && (savedLang === 'pt-BR' || savedLang === 'en')) {
        this.setLanguage(savedLang);
      } else {
        this.setLanguage('pt-BR');
      }
    } else {
      // No servidor, sempre usa pt-BR como padrão
      this.setLanguage('pt-BR');
    }
  }

  /**
   * Define o idioma atual e carrega as traduções
   */
  setLanguage(lang: Language): void {
    this.http.get(`/assets/i18n/${lang}.json`).pipe(
      tap((translations) => {
        this.translations = translations;
        this.currentLanguageSubject.next(lang);
        this.currentLanguage.set(lang);
        if (this.isBrowser) {
          localStorage.setItem('selectedLanguage', lang);
        }
      })
    ).subscribe();
  }

  /**
   * Obtém uma tradução pela chave
   * Suporta navegação aninhada usando ponto: 'header.title'
   */
  translate(key: string): string {
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  /**
   * Obtém o objeto de traduções atual
   */
  getTranslations(): any {
    return this.translations;
  }

  /**
   * Obtém o idioma atual
   */
  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }
}
