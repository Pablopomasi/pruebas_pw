import { Component } from '@angular/core';

@Component({
  selector: 'app-niveles-modalidades',
  standalone: true,
  templateUrl: './niveles-modalidades.html',
  styleUrl: './niveles-modalidades.css',
})
export class NivelesModalidadesComponent {
  activo = 0;

  niveles = [
    { codigo: 'A1', nombre: 'Principiante', texto: 'Comprendes y usas expresiones cotidianas muy básicas para presentarte y cubrir necesidades inmediatas.', habilidades: ['Saludar y presentarse', 'Pedir y dar datos personales', 'Frases de uso diario'] },
    { codigo: 'A2', nombre: 'Básico', texto: 'Te comunicas en tareas simples y rutinarias sobre temas familiares y de tu entorno.', habilidades: ['Describir tu rutina', 'Conversar sobre compras y viajes', 'Escribir mensajes sencillos'] },
    { codigo: 'B1', nombre: 'Intermedio', texto: 'Te desenvuelves en la mayoría de situaciones y expresas experiencias, planes y opiniones.', habilidades: ['Narrar experiencias', 'Entender textos de interés', 'Dar opiniones fundamentadas'] },
    { codigo: 'B2', nombre: 'Intermedio alto', texto: 'Interactúas con fluidez y espontaneidad, y comprendes ideas complejas en temas concretos y abstractos.', habilidades: ['Debatir con naturalidad', 'Redactar textos detallados', 'Comprender discursos extensos'] },
    { codigo: 'C1', nombre: 'Avanzado', texto: 'Usas el idioma con flexibilidad en contextos académicos y profesionales exigentes.', habilidades: ['Expresarte sin buscar palabras', 'Analizar textos complejos', 'Presentar con precisión'] },
  ];

  modalidades = [
    { icono: 'bi-people', titulo: 'Presencial', texto: 'Clases en campus con espacios y equipos interactivos.', puntos: ['Ideal para escolares', 'Interacción cara a cara'] },
    { icono: 'bi-laptop', titulo: 'Virtual', texto: 'Clases en vivo con plataforma y aula virtual.', puntos: ['Para universitarios', 'Turnos flexibles'] },
    { icono: 'bi-calendar-check', titulo: 'A distancia', texto: 'Combina sesiones guiadas con trabajo autónomo.', puntos: ['Para profesionales', 'Twice a Week disponible'] },
    { icono: 'bi-lightning-charge', titulo: 'Intensivo', texto: 'Avanza más rápido con mayor carga horaria semanal.', puntos: ['Súperintensivo', 'Cumple tu requisito a tiempo'] },
  ];

  seleccionar(i: number) {
    this.activo = i;
  }
}