import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  open = false;
  scrolled = false;

  topLinks = [
    { label: 'Regresar a la UC', href: 'https://ucontinental.edu.pe' },
    { label: 'Atención al estudiante', href: 'https://idiomas.ucontinental.edu.pe/tramite-documentario-del-cic/' },
    { label: 'Aula virtual', href: 'http://aulavirtualcentrodeidiomas.continental.edu.pe/' },
    { label: 'Trabaja con nosotros', href: 'https://idiomas.ucontinental.edu.pe/trabaja-con-nosotros/' },
  ];

  links = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Oferta académica', href: '#oferta-academica' },
    { label: 'Niveles y modalidades', href: '#niveles-modalidades' },
    { label: 'Docentes', href: '#docentes' },
    { label: 'Estudiantes', href: '#informacion-estudiantes' },
    { label: 'Testimonios y noticias', href: '#testimonios-noticias' },
    { label: 'Sedes', href: '#sedes' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }
}