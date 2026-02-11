import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  AnimationTriggerMetadata,
  keyframes,
} from '@angular/animations';

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('600ms ease-out', style({ opacity: 1 }))
  ]),
]);

export const fadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ]),
]);

export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate('400ms ease-out', style({ opacity: 1 }))]),
  transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
]);

export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  state('void', style({ 
    opacity: 0, 
    transform: 'translateY(30px)' 
  })),
  transition(':enter', [
    animate('{{duration}}ms {{delay}}ms ease-out', 
      style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      })
    )
  ], { params: { duration: 800, delay: 0 } }),
]);

export const fadeInDown: AnimationTriggerMetadata = trigger('fadeInDown', [
  state('void', style({ 
    opacity: 0, 
    transform: 'translateY(-30px)' 
  })),
  transition(':enter', [
    animate('{{duration}}ms {{delay}}ms ease-out', 
      style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      })
    )
  ], { params: { duration: 800, delay: 0 } }),
]);

export const slideInLeft: AnimationTriggerMetadata = trigger('slideInLeft', [
  state('void', style({ 
    opacity: 0, 
    transform: 'translateX(-50px)' 
  })),
  transition(':enter', [
    animate('800ms ease-out', 
      style({ 
        opacity: 1, 
        transform: 'translateX(0)' 
      })
    )
  ]),
]);

export const slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
  state('void', style({ 
    opacity: 0, 
    transform: 'translateX(50px)' 
  })),
  transition(':enter', [
    animate('800ms ease-out', 
      style({ 
        opacity: 1, 
        transform: 'translateX(0)' 
      })
    )
  ]),
]);

export const scaleIn: AnimationTriggerMetadata = trigger('scaleIn', [
  state('void', style({ 
    opacity: 0, 
    transform: 'scale(0.8)' 
  })),
  transition(':enter', [
    animate('500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
      style({ 
        opacity: 1, 
        transform: 'scale(1)' 
      })
    )
  ]),
]);

export const scaleInOut: AnimationTriggerMetadata = trigger('scaleInOut', [
  state('void', style({ 
    opacity: 0, 
    transform: 'scale(0.8)' 
  })),
  transition(':enter', [
    animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
  ]),
]);

export const rotateIn: AnimationTriggerMetadata = trigger('rotateIn', [
  state('void', style({ 
    opacity: 0, 
    transform: 'rotate(-10deg) scale(0.9)' 
  })),
  transition(':enter', [
    animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
      style({ 
        opacity: 1, 
        transform: 'rotate(0) scale(1)' 
      })
    )
  ]),
]);

export const staggerList: AnimationTriggerMetadata = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const staggerCards: AnimationTriggerMetadata = trigger('staggerCards', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.9)' }),
      stagger(150, [
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const bounceIn: AnimationTriggerMetadata = trigger('bounceIn', [
  transition(':enter', [
    animate('800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
      keyframes([
        style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
        style({ opacity: 1, transform: 'scale(1.05)', offset: 0.7 }),
        style({ transform: 'scale(0.97)', offset: 0.85 }),
        style({ transform: 'scale(1)', offset: 1 })
      ])
    )
  ])
]);

export const slideInUp: AnimationTriggerMetadata = trigger('slideInUp', [
  state('void', style({ 
    opacity: 0, 
    transform: 'translateY(100px)' 
  })),
  transition(':enter', [
    animate('800ms ease-out', 
      style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      })
    )
  ]),
]);

export const hoverScale: AnimationTriggerMetadata = trigger('hoverScale', [
  state('default', style({ transform: 'scale(1)' })),
  state('hovered', style({ transform: 'scale(1.05)' })),
  transition('default <=> hovered', animate('300ms ease-out')),
]);

export const hoverGlow: AnimationTriggerMetadata = trigger('hoverGlow', [
  state('default', style({ 
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' 
  })),
  state('hovered', style({ 
    boxShadow: '0 0 30px rgba(100, 255, 218, 0.5)' 
  })),
  transition('default <=> hovered', animate('300ms ease-out')),
]);

export const routeFadeIn: AnimationTriggerMetadata = trigger('routeFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('500ms ease-out', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

export const allAnimations = [
  fadeIn,
  fadeOut,
  fadeInOut,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleInOut,
  rotateIn,
  staggerList,
  staggerCards,
  bounceIn,
  slideInUp,
  hoverScale,
  hoverGlow,
  routeFadeIn,
];
