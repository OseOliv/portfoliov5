import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  output,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'animate-fade-in-up';
  @Input() threshold: number = 0.1;
  @Input() once: boolean = true;
  @Input() delay: number = 0;
  
  animationTriggered = output<void>();

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.applyAnimation();
      return;
    }

    this.setupObserver();
  }

  private setupObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!this.hasAnimated || !this.once) {
            this.applyAnimation();
            this.hasAnimated = true;
          }

          if (this.once) {
            this.observer?.unobserve(this.elementRef.nativeElement);
          }
        } else if (!this.once && this.hasAnimated) {
          this.removeAnimation();
        }
      });
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  private applyAnimation(): void {
    if (this.delay > 0) {
      setTimeout(() => {
        this.addAnimationClass();
      }, this.delay);
    } else {
      this.addAnimationClass();
    }
  }

  private addAnimationClass(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      this.animationClass
    );
    this.animationTriggered.emit();
  }

  private removeAnimation(): void {
    this.renderer.removeClass(
      this.elementRef.nativeElement,
      this.animationClass
    );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
