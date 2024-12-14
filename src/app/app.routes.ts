import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './pagina/sistema/sistema.component';
import { HomeComponent } from './pagina/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sistema', component: SistemaComponent },
    { path: 'jogadores', component: SistemaComponent },
    { path: 'grupos', component: SistemaComponent },
    { path: 'npc', component: SistemaComponent },
    { path: 'ameaca', component: SistemaComponent },
    { path: 'historia', component: SistemaComponent },
    { path: 'configuracao', component: SistemaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Registrando as rotas
    exports: [RouterModule]
})
export class AppRoutingModule { }