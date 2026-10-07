import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Item { tipo: 'Noticia' | 'Evento'; fecha: string; titulo: string; texto: string; icono: string; }

@Component({
  selector: 'app-testimonios-noticias',
  standalone: true,
  templateUrl: './testimonios-noticias.html',
  styleUrl: './testimonios-noticias.css',
})
export class TestimoniosNoticiasComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  /* ---------- Testimonios ---------- */
  actual = 0;
  private timer?: ReturnType<typeof setInterval>;

  testimonios = [
    { nombre: 'Camila R.', rol: 'Estudiante de Ingeniería · Inglés', texto: 'Las clases virtuales son dinámicas y los docentes siempre están pendientes de tu progreso. Logré cumplir mi requisito de idioma a tiempo.' },
    { nombre: 'Diego M.', rol: 'Egresado · Portugués', texto: 'Aprender portugués me abrió oportunidades laborales. La metodología experiencial hace que hablar sea natural desde las primeras semanas.' },
    { nombre: 'Valeria S.', rol: 'Profesional · Inglés a distancia', texto: 'La modalidad a distancia se adaptó a mi trabajo. Con el aula virtual pude avanzar a mi ritmo sin perder acompañamiento.' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.timer = setInterval(() => this.siguiente(), 7000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  siguiente() {
    this.actual = (this.actual + 1) % this.testimonios.length;
  }

  anterior() {
    this.actual = (this.actual - 1 + this.testimonios.length) % this.testimonios.length;
  }

  ir(i: number) {
    this.actual = i;
  }

  /* ---------- Noticias y eventos ---------- */
  filtros = ['Todos', 'Noticia', 'Evento'];
  filtro = 'Todos';

  items: Item[] = [
    { tipo: 'Evento', fecha: '15 Oct 2026', titulo: 'Examen de clasificación', texto: 'Rinde la evaluación y descubre en qué ciclo debes iniciar.', icono: 'bi-clipboard-check' },
    { tipo: 'Noticia', fecha: '08 Oct 2026', titulo: 'Inscripciones abiertas al 1er ciclo de inglés', texto: 'Asegura tu vacante y cumple tu requisito de idioma a tiempo.', icono: 'bi-megaphone' },
    { tipo: 'Evento', fecha: '24 Oct 2026', titulo: 'Simulacro Cambridge', texto: 'Practica con un formato real antes de tu examen internacional.', icono: 'bi-journal-check' },
    { tipo: 'Noticia', fecha: '30 Sep 2026', titulo: 'Seguimos conectados con Global Partners', texto: 'Intercambio con estudiantes de más de 50 universidades del mundo.', icono: 'bi-globe-americas' },
    { tipo: 'Evento', fecha: '05 Nov 2026', titulo: 'Taller de acreditación de inglés', texto: 'Prepárate para acreditar tu nivel con acompañamiento docente.', icono: 'bi-mortarboard' },
    { tipo: 'Noticia', fecha: '20 Sep 2026', titulo: 'Centro Examinador Cambridge', texto: 'Certifica tu inglés con reconocimiento internacional.', icono: 'bi-award' },
  ];

  get filtrados(): Item[] {
    return this.filtro === 'Todos' ? this.items : this.items.filter((i) => i.tipo === this.filtro);
  }

  filtrar(f: string) {
    this.filtro = f;
  }
}