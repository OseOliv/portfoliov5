import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  website?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  faExternalLink = faExternalLinkAlt;

  experiences: Experience[] = [
    {
      period: 'Set 2024 - Atual',
      company: 'AfroSaúde',
      role: 'Desenvolvedor de software júnior',
      description:
        'Através da Ayabese, presto consultoria tecnológica para a AfroSaúde, uma healthtech focada em saúde mental. Na AfroSaúde, empresa focada em saúde mental via teleatendimento, atuo no desenvolvimento de soluções tecnológicas que melhoram a experiência do usuário e otimizam processos internos. Também realizo integrações com inteligência artificial, Typebots, chatbots e fluxos de automação, tornando o atendimento mais acessível, eficiente e humanizado para profissionais e pacientes.',
      technologies: [
        'AngularJS',
        'TypeScript',
        'Nest.js',
        'Node.js',
        'Firebase',
        'Ruby on Rails',
        'SCSS',
        'Tailwind CSS',
        'HTML',
        'JavaScript'
      ],
      website: 'https://afrosaude.com.br',
    },
    {
      period: 'Ago 2024 - Atual',
      company: 'AyaBese',
      role: 'Desenvolvedor de software júnior',
      description:
        'Na Ayabese, startup especializada em consultoria e soluções de desenvolvimento, atuo na criação e manutenção de sistemas que impulsionam a transformação digital dos nossos clientes.',
      technologies: [
        'AngularJS',
        'TypeScript',
        'Nest.js',
        'Node.js',
        'Firebase',
        'Ruby on Rails',
        'SCSS',
        'Tailwind CSS',
        'HTML',
        'JavaScript',
        'IA'
      ],
      website: '#',
    },
  ];
}
