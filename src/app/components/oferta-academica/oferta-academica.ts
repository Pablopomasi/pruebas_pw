import { Component } from '@angular/core';

interface Programa { nombre: string; modalidad: string; }
interface Idioma { nombre: string; icono: string; lema: string; programas: Programa[]; enlace: string; }

@Component({
  selector: 'app-oferta-academica',
  standalone: true,
  templateUrl: './oferta-academica.html',
  styleUrl: './oferta-academica.css',
})
export class OfertaAcademicaComponent {
  activo = 0;

  idiomas: Idioma[] = [
    {
      nombre: 'Inglés',
      icono: '🇬🇧',
      lema: 'Comunícate en el idioma universal y accede a nuevas oportunidades para tu futuro.',
      enlace: 'https://idiomas.ucontinental.edu.pe/ingles/',
      programas: [
        { nombre: 'Inglés presencial para escolares', modalidad: 'Presencial' },
        { nombre: 'Inglés para universitarios', modalidad: 'Virtual' },
        { nombre: 'Inglés intensivo para universitarios', modalidad: 'Virtual' },
        { nombre: 'Inglés para profesionales', modalidad: 'A distancia' },
        { nombre: 'Inglés Twice a Week', modalidad: 'A distancia' },
        { nombre: 'Comprensión de textos en inglés', modalidad: 'Curso especial' },
        { nombre: 'Taller de acreditación de inglés', modalidad: 'Taller' },
        { nombre: 'Módulo de preparación para suficiencia', modalidad: 'Preparación' },
      ],
    },
    {
      nombre: 'Portugués',
      icono: '🇧🇷',
      lema: 'Aprende el sexto idioma más hablado del mundo y potencia tu perfil profesional.',
      enlace: 'https://idiomas.ucontinental.edu.pe/portugues/',
      programas: [
        { nombre: 'Portugués súperintensivo', modalidad: 'Virtual' },
        { nombre: 'Portugués a distancia', modalidad: 'A distancia' },
      ],
    },
    {
      nombre: 'Italiano',
      icono: '🇮🇹',
      lema: 'Domina el italiano y logra un acercamiento más profundo con esta cultura.',
      enlace: 'https://idiomas.ucontinental.edu.pe/italiano/',
      programas: [
        { nombre: 'Italiano súperintensivo', modalidad: 'Virtual' },
        { nombre: 'Italiano a distancia', modalidad: 'A distancia' },
      ],
    },
  ];

  seleccionar(i: number) {
    this.activo = i;
  }
}
