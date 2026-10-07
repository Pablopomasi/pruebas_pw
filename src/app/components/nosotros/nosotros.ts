import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Oferta {
  idioma: string;
  programa: string;
  modalidad: string;
  niveles: string[];
  horario: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class NosotrosComponent {
  /* ---------- Hero: buscador de horarios ---------- */
  idiomas = ['Inglés', 'Portugués', 'Italiano'];
  modalidades = ['Presencial', 'Virtual', 'A distancia'];
  niveles = ['Básico', 'Intermedio', 'Avanzado'];

  idioma = '';
  modalidad = '';
  nivel = '';

  private todos = ['Básico', 'Intermedio', 'Avanzado'];

  ofertas: Oferta[] = [
    { idioma: 'Inglés', programa: 'Inglés presencial para escolares', modalidad: 'Presencial', niveles: this.todos, horario: 'Sábados · 9:00 a.m. – 1:00 p.m.' },
    { idioma: 'Inglés', programa: 'Inglés para universitarios', modalidad: 'Virtual', niveles: this.todos, horario: 'Lun a Vie · turnos mañana, tarde y noche' },
    { idioma: 'Inglés', programa: 'Inglés intensivo para universitarios', modalidad: 'Virtual', niveles: this.todos, horario: 'Lun a Vie · 2 horas diarias' },
    { idioma: 'Inglés', programa: 'Inglés para profesionales', modalidad: 'A distancia', niveles: this.todos, horario: 'Sábados y domingos · flexible' },
    { idioma: 'Inglés', programa: 'Inglés Twice a Week', modalidad: 'A distancia', niveles: ['Básico', 'Intermedio'], horario: 'Martes y jueves · 7:00 – 9:00 p.m.' },
    { idioma: 'Portugués', programa: 'Portugués súperintensivo', modalidad: 'Virtual', niveles: this.todos, horario: 'Lun a Vie · 7:00 – 9:00 p.m.' },
    { idioma: 'Portugués', programa: 'Portugués a distancia', modalidad: 'A distancia', niveles: this.todos, horario: 'Sábados · 8:00 a.m. – 12:00 m.' },
    { idioma: 'Italiano', programa: 'Italiano súperintensivo', modalidad: 'Virtual', niveles: this.todos, horario: 'Lun a Vie · 7:00 – 9:00 p.m.' },
    { idioma: 'Italiano', programa: 'Italiano a distancia', modalidad: 'A distancia', niveles: this.todos, horario: 'Sábados · 2:00 – 6:00 p.m.' },
  ];

  get resultados(): Oferta[] {
    return this.ofertas.filter(
      (o) =>
        (!this.idioma || o.idioma === this.idioma) &&
        (!this.modalidad || o.modalidad === this.modalidad) &&
        (!this.nivel || o.niveles.includes(this.nivel)),
    );
  }

  limpiar() {
    this.idioma = '';
    this.modalidad = '';
    this.nivel = '';
  }

  /* ---------- Paneles expandibles (hover) ---------- */
  panelActivo = 0;

  paneles = [
    {
      emoji: '🇬🇧',
      etiqueta: 'Inglés',
      titulo: 'Inglés para universitarios',
      texto: 'Cumple tu requisito de idioma con clases virtuales en vivo y seguimiento permanente.',
      puntos: ['Modalidad virtual', 'Turnos mañana, tarde y noche', 'Aula virtual incluida'],
      enlace: 'https://idiomas.ucontinental.edu.pe/programa/ingles-universitarios/',
      fondo: "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('/imagen-ingles.jpg') center/cover",
    },
    {
      emoji: '🧒',
      etiqueta: 'Escolares',
      titulo: 'Inglés para escolares',
      texto: 'Clases presenciales en campus con espacios y equipos interactivos.',
      puntos: ['Modalidad presencial', 'Metodología experiencial', 'Docentes especializados'],
      enlace: 'https://idiomas.ucontinental.edu.pe/programa/ingles-escolares/',
      fondo: "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('/imagen-ingles-escolar1.jpg') center/cover",
    },
    {
      emoji: '🇧🇷',
      etiqueta: 'Portugués',
      titulo: 'Portugués',
      texto: 'Aprende el sexto idioma más hablado del mundo y potencia tu perfil profesional.',
      puntos: ['Súperintensivo virtual', 'Modalidad a distancia', 'Estándares del MCER'],
      enlace: 'https://idiomas.ucontinental.edu.pe/portugues/',
      fondo: "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('/imagen-portugues1.jpg') center/cover",
    },
    {
      emoji: '🇮🇹',
      etiqueta: 'Italiano',
      titulo: 'Italiano',
      texto: 'Domina el italiano y logra un acercamiento más profundo con esta cultura.',
      puntos: ['Súperintensivo virtual', 'Modalidad a distancia', 'Enfoque cultural'],
      enlace: 'https://idiomas.ucontinental.edu.pe/italiano/',
      fondo: "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('/imagen-italiano.jpg') center/cover",
    },
    {
      emoji: '🏆',
      etiqueta: 'Cambridge',
      titulo: 'Exámenes Cambridge',
      texto: 'Certifica tu inglés con reconocimiento internacional y prepárate con simulacros.',
      puntos: ['Centro examinador', 'Preparación para exámenes', 'Simulacros Cambridge'],
      enlace: 'https://idiomas.ucontinental.edu.pe/centro-examinador-cambridge/',
      fondo: "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('/imagen-cambridge.jpg') center/cover",
    },
  ];

  /* ---------- Estadísticas ---------- */
  stats = [
    { icono: 'bi-award', valor: '+20', texto: 'años de trayectoria formando ciudadanos globales' },
    { icono: 'bi-translate', valor: '3', texto: 'idiomas: inglés, portugués e italiano' },
    { icono: 'bi-building', valor: '+50', texto: 'universidades aliadas en Global Partners' },
    { icono: 'bi-globe-americas', valor: '22', texto: 'países conectados con nuestros estudiantes' },
  ];

  /* ---------- Nosotros: descripción, misión, visión, trayectoria ---------- */
  descripcion =
    'El Centro de Idiomas de la Universidad Continental (CIC) impulsa las habilidades lingüísticas de ' +
    'estudiantes, profesionales y escolares con programas de inglés, portugués e italiano, una metodología ' +
    'alineada al Marco Común Europeo de Referencia y una red de convenios internacionales.';

  mision =
    'Formar personas capaces de comunicarse en otros idiomas con eficacia, mediante una propuesta académica ' +
    'moderna, docentes altamente calificados y experiencias internacionales que amplíen sus oportunidades.';

  vision =
    'Ser el centro de idiomas de referencia en el Perú por su calidad académica, su conexión con el mundo y ' +
    'su aporte a la formación de líderes con mentalidad global y emprendedora.';

  hitos = [
    { etapa: '2004', titulo: 'Nace el CIC', texto: 'Iniciamos la enseñanza de idiomas en la Universidad Continental.' },
    { etapa: 'Crecimiento', titulo: 'Tres idiomas, tres modalidades', texto: 'Ampliamos la oferta a inglés, portugués e italiano en formato presencial, virtual y a distancia.' },
    { etapa: 'Reconocimiento', titulo: 'Centro Examinador Cambridge', texto: 'Ofrecemos exámenes oficiales, preparación y simulacros.' },
    { etapa: 'Hoy', titulo: 'Red Global Partners', texto: 'Conectados con más de 50 universidades en 22 países.' },
  ];

  razones = [
    { n: '01', titulo: 'Asegura tu contacto con el mundo', texto: 'A través de nuestros convenios con prestigiosas instituciones extranjeras.' },
    { n: '02', titulo: 'Aprende de manera eficaz', texto: 'Gracias a nuestro equipo docente altamente calificado.' },
    { n: '03', titulo: 'Estudia con metodología moderna', texto: 'Cumplimos los estándares del Marco de Referencia Europeo.' },
    { n: '04', titulo: 'Potencia tu visión global', texto: 'Contamos con plataformas de aprendizaje e intercambio internacional.' },
  ];
}
