import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { OfertaAcademicaComponent } from './components/oferta-academica/oferta-academica';
import { NivelesModalidadesComponent } from './components/niveles-modalidades/niveles-modalidades';
import { DocentesComponent } from './components/docentes/docentes';
import { InformacionEstudiantesComponent } from './components/informacion-estudiantes/informacion-estudiantes';
import { TestimoniosNoticiasComponent } from './components/testimonios-noticias/testimonios-noticias';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    NosotrosComponent,
    OfertaAcademicaComponent,
    NivelesModalidadesComponent,
    DocentesComponent,
    InformacionEstudiantesComponent,
    TestimoniosNoticiasComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'centro_de_idiomas';
  @HostListener('document:click', ['$event'])
  irAlAncla(event: MouseEvent) {
    const enlace = (event.target as HTMLElement).closest('a[href^="#"]');
    if (!enlace) return;

    const id = enlace.getAttribute('href')!.slice(1);
    const destino = id ? document.getElementById(id) : null;

    if (destino) {
      event.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}