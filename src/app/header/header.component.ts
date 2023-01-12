import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
/* Cuando hago click .button, .nav Toggle 'activo' */

const button = (document.querySelector('.button') as HTMLButtonElement);
const nav  = (document.querySelector('.nav') as HTMLElement);

/*button.addEventListener('click',() :void => {})
nav.classList.toggle('activo') */


