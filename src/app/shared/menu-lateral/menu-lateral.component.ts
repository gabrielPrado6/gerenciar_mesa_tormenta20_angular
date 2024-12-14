import { Component } from '@angular/core';
import { MaterialComponents } from '../material';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [
    ...MaterialComponents
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
  listaBotoes = [
    {icone:"castle", texto:"Sistema", rota:""},
    {icone:"person", texto:"Jogadores", rota:""},
    {icone:"groups", texto:"Grupos", rota:""},
    {icone:"diversity_3", texto:"Não Jogáveis (NPC)", rota:""},
    {icone:"sports_mma", texto:"Ameaças", rota:""},
    {icone:"menu_book", texto:"Historia", rota:""},
    {icone:"settings", texto:"Config.", rota:""}
  ]
  constructor(
    iconRegistry: MatIconRegistry,
    private router: Router
  ) {
    iconRegistry.setDefaultFontSetClass('material-icons-outlined');
  }

  moverRota(rota:string){
    this.router.navigate([rota]);
  }
}
