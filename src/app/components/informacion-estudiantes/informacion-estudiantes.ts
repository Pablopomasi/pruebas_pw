import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-estudiantes',
  standalone: true,
  templateUrl: './informacion-estudiantes.html',
  styleUrl: './informacion-estudiantes.css',
})
export class InformacionEstudiantesComponent {
  activo = 0;

  tabs = [
    { label: 'Horarios', icono: 'bi-clock' },
    { label: 'Matrícula', icono: 'bi-pencil-square' },
    { label: 'Requisitos', icono: 'bi-card-checklist' },
    { label: 'Promociones', icono: 'bi-tags' },
    { label: 'Servicios y beneficios', icono: 'bi-gift' },
  ];

  horarios = [
    { idioma: 'Inglés', modalidad: 'Virtual', dias: 'Lun a Vie', turno: 'Mañana / Tarde / Noche' },
    { idioma: 'Inglés', modalidad: 'A distancia', dias: 'Sáb y Dom', turno: 'Flexible' },
    { idioma: 'Inglés', modalidad: 'Presencial (escolares)', dias: 'Sábados', turno: '9:00 a.m. – 1:00 p.m.' },
    { idioma: 'Portugués', modalidad: 'Virtual', dias: 'Lun a Vie', turno: '7:00 – 9:00 p.m.' },
    { idioma: 'Italiano', modalidad: 'Virtual', dias: 'Lun a Vie', turno: '7:00 – 9:00 p.m.' },
  ];

  pasos = [
    { titulo: 'Solicita información', texto: 'Déjanos tus datos y un asesor te orientará sobre programas y horarios.' },
    { titulo: 'Define tu nivel', texto: 'Rinde el examen de clasificación si ya tienes conocimientos previos.' },
    { titulo: 'Matricúlate en línea', texto: 'Ingresa al portal de matrícula y elige tu programa y horario.' },
    { titulo: 'Empieza a estudiar', texto: 'Accede al aula virtual y vive tu primera clase.' },
  ];

  requisitos = [
    'Documento de identidad (DNI o carné de extranjería).',
    'Datos de contacto actualizados (correo y teléfono).',
    'Examen de clasificación para estudiantes con nivel previo.',
    'Constancia de estudios o código UC para tarifas de universitarios.',
    'Comprobante de pago de la matrícula.',
  ];

  promociones = [
    { etiqueta: 'Abierto', titulo: 'Inscripciones al 1er ciclo de inglés', texto: 'Asegura tu dominio obligatorio del idioma a tiempo.' },
    { etiqueta: 'Gratis', titulo: 'Examen de clasificación', texto: 'Descubre tu nivel y empieza en el ciclo que te corresponde.' },
    { etiqueta: 'Consultar', titulo: 'Beneficios por pronto pago', texto: 'Consulta con un asesor las condiciones vigentes por campaña.' },
  ];

  servicios = [
    { icono: 'bi-pc-display', titulo: 'Aula virtual', texto: 'Materiales, tareas y clases en un solo lugar.' },
    { icono: 'bi-file-earmark-text', titulo: 'Trámite documentario', texto: 'Constancias, convalidaciones y solicitudes en línea.' },
    { icono: 'bi-headset', titulo: 'Atención al estudiante', texto: 'Soporte permanente para resolver tus consultas.' },
    { icono: 'bi-globe2', titulo: 'Intercambio internacional', texto: 'Conecta con estudiantes de Global Partners.' },
    { icono: 'bi-trophy', titulo: 'Exámenes internacionales', texto: 'Certifica tu inglés con Cambridge.' },
    { icono: 'bi-graph-up-arrow', titulo: 'Seguimiento permanente', texto: 'Acompañamiento para mejores resultados.' },
  ];

  seleccionar(i: number) {
    this.activo = i;
  }
}