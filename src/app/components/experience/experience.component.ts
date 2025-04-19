import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      period: 'Set 2024 - Atual',
      company: 'AfroSaúde',
      role: 'Desenvolvedor de software júnior',
      description:
        'Na AfroSaúde, uma empresa focada em teleatendimento para saúde mental, atuo no desenvolvimento e aprimoramento de aplicações que melhoram a experiência do usuário e otimizam processos internos. Criando soluções tecnológicas que tornem o atendimento mais acessível, eficiente e humanizado, impactando positivamente a jornada dos profissionais e pacientes.',
      technologies: [
        'AngularJS',
        'TypeScript',
        'Nest.js',
        'Node.js',
        'Firebase',
        'Ruby',
      ],
    },
    {
      period: 'Ago 2022 - Atual',
      company: 'AyaBese',
      role: 'Desenvolvedor de software júnior',
      description:
        'Na Ayabese, startup especializada em consultoria e soluções de desenvolvimento, atuo na criação e manutenção de sistemas que impulsionam a transformação digital dos nossos clientes.',
      technologies: [
        'Node.js',
        'Ruby on Rails',
        'SCSS',
        'TypeScript',
        'AngularJS',
      ],
    },
  ];
}
