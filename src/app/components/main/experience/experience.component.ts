import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
export class ExperienceComponent {
  faExternalLink = faExternalLinkAlt;

  experiences: Experience[] = [
    {
      period: 'Agosto de 2024 - Janeiro de 2026',
      company: 'Ayabese / AfroSaúde',
      role: 'Desenvolvedor de Software',
      description:
        'Atuei simultaneamente na Ayabese, empresa de consultoria e desenvolvimento tecnológico, e na AfroSaúde, healthtech especializada em saúde mental via teleatendimento. A Ayabese presta serviços para a AfroSaúde, e em ambas contribuí no desenvolvimento de soluções digitais voltadas à melhoria da experiência do usuário e à otimização de processos internos.',
      activities: [
        '<strong>Desenvolvimento e manutenção de sistemas</strong> com <strong>Node.js</strong>, <strong>TypeScript</strong> e <strong>Ruby on Rails</strong>, com foco em <strong>eficiência</strong> e <strong>escalabilidade</strong>',
        '<strong>Implementação de integrações</strong> com <strong>inteligência artificial</strong>, <strong>Typebots</strong> e <strong>chatbots</strong>',
        '<strong>Criação de APIs REST</strong> e <strong>fluxos de automação</strong>',
        '<strong>Suporte técnico</strong> às equipes de produto e atendimento da <strong>AfroSaúde</strong>'
      ],
      technologies: [
        'AngularJS',
        'TypeScript',
        'Nest.js',
        'Node.js',
        'Firebase',
        'Ruby on Rails',
        'CSS',
        'Tailwind',
        'HTML',
        'JavaScript',
        'PostgreSQL',
        'Docker',
        'Inteligência Artificial',
        'Typebots',
        'Chatbots'
      ],
      website: 'https://afrosaude.com.br',
    },
  ];
}
