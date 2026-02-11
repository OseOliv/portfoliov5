import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollPosition = signal<number>(0);
  scrollDirection = signal<'up' | 'down'>('down');
  
  private lastScrollTop = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initScrollListener();
    }
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      this.scrollPosition.set(scrollTop);
      
      if (scrollTop > this.lastScrollTop) {
        this.scrollDirection.set('down');
      } else if (scrollTop < this.lastScrollTop) {
        this.scrollDirection.set('up');
      }
      
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
  }
  scrollToElement(elementId: string, offset: number = 0): void {
    if (typeof document === 'undefined') return;
    
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  scrollToTop(): void {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  getScrollPercentage(): number {
    if (typeof window === 'undefined' || typeof document === 'undefined') return 0;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = documentHeight - windowHeight;
    
    return Math.round((scrollTop / trackLength) * 100);
  }
  isElementInViewport(element: HTMLElement, threshold: number = 0): boolean {
    if (typeof window === 'undefined') return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight - (windowHeight * threshold) &&
      rect.bottom >= 0
    );
  }
}
