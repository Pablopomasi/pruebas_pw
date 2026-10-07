import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  anio = new Date().getFullYear();

  /* ---------- Formulario de contacto ---------- */
  idiomas = ['Inglés', 'Portugués', 'Italiano'];
  enviado = false;
  datos = { nombre: '', correo: '', telefono: '', idioma: '', mensaje: '' };

  enviar(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    this.enviado = true;
    form.resetForm({ idioma: '' });
  }

  nuevo() {
    this.enviado = false;
  }

  /* ---------- Sedes ---------- */
  activa = 0;

  sedes = [
    { ciudad: 'Huancayo', direccion: 'Av. San Carlos 1980 - San Carlos - Huancayo', informes: '' },
    { ciudad: 'Arequipa', direccion: 'La Canseco II / Sector Valle Chili, José Luis Bustamante y Rivero - Arequipa', informes: '' },
    { ciudad: 'Cusco', direccion: 'Jr. Juan Espinoza Medrano N° 358 (Q-13) - Cusco', informes: 'Informes: Ca. Manuel Prado B-7, Collasuyo' },
    { ciudad: 'Los Olivos', direccion: 'Av. Alfredo Mendiola 5210 - Los Olivos - Lima', informes: '' },
    { ciudad: 'Miraflores', direccion: 'Calle Junín 355 - Miraflores - Lima', informes: '' },
  ];

  seleccionarSede(i: number) {
    this.activa = i;
  }

  mapa(direccion: string): string {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(direccion);
  }

  /* ---------- Enlaces del footer ---------- */
  programas = [
    { label: 'Inglés', href: 'https://idiomas.ucontinental.edu.pe/ingles/' },
    { label: 'Italiano', href: 'https://idiomas.ucontinental.edu.pe/italiano/' },
    { label: 'Portugués', href: 'https://idiomas.ucontinental.edu.pe/portugues/' },
    { label: 'Exámenes Cambridge', href: 'https://idiomas.ucontinental.edu.pe/centro-examinador-cambridge/' },
  ];

  informacion = [
    { label: 'Estudiantes', href: 'https://estudiantes.ucontinental.edu.pe/' },
    { label: 'Postulantes', href: 'https://postulantes.ucontinental.edu.pe/' },
    { label: 'Egresados', href: 'https://ucan.ucontinental.edu.pe' },
    { label: 'Docentes', href: 'https://ucontinental.edu.pe/docentes/' },
  ];
}