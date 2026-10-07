import { Component } from '@angular/core';

@Component({
  selector: 'app-docentes',
  standalone: true,
  templateUrl: './docentes.html',
  styleUrl: './docentes.css',
})
export class DocentesComponent {
  docentes = [
    { iniciales: 'AQ', nombre: 'Mg. Andrea Quispe', especialidad: 'Preparación Cambridge (B2 First / C1 Advanced)', idiomas: ['Inglés'], experiencia: '12 años de experiencia' },
    { iniciales: 'LM', nombre: 'Lic. Luca Moretti', especialidad: 'Italiano para fines académicos y culturales', idiomas: ['Italiano', 'Inglés'], experiencia: '9 años de experiencia' },
    { iniciales: 'CS', nombre: 'Mg. Camila Souza', especialidad: 'Portugués intensivo y comunicación profesional', idiomas: ['Portugués', 'Inglés'], experiencia: '10 años de experiencia' },
    { iniciales: 'JR', nombre: 'Lic. Jorge Rojas', especialidad: 'Inglés para escolares y metodologías activas', idiomas: ['Inglés'], experiencia: '7 años de experiencia' },
  ];
}
