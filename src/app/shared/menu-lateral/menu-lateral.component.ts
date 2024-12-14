import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialComponents } from '../material';
import { MatIconRegistry } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  imports: [
    ...MaterialComponents
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent implements OnInit, OnDestroy {
  listaBotoes = [
    {icone:"castle", texto:"Sistema", rota:"home"},
    {icone:"person", texto:"Jogadores", rota:"jogadores"},
    {icone:"groups", texto:"Grupos", rota:"grupos"},
    {icone:"diversity_3", texto:"Não Jogáveis (NPC)", rota:"npc"},
    {icone:"sports_mma", texto:"Ameaças", rota:"ameaca"},
    {icone:"menu_book", texto:"Historia", rota:"historia"},
    {icone:"settings", texto:"Config.", rota:"configuracao"}
  ]
  currentUrl = '';

  private routerSubscription: Subscription| null = null;

  constructor(
    iconRegistry: MatIconRegistry,
    private router: Router
  ) {
    iconRegistry.setDefaultFontSetClass('material-icons-outlined');
  };

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects; // Atualiza a URL após a navegação
        console.log('A URL foi atualizada para:', this.currentUrl);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  validaRota(rota:string){
    debugger
    if(this.currentUrl.includes(rota)) 
      return true
    return  null
  }
  moverRota(rota:string){
    this.router.navigate([rota]);
  }
}
