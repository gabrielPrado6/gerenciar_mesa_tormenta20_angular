import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaComponent } from './pagina/sistema/sistema.component';
import { HomeComponent } from './pagina/home/home.component';
import { PesquisaComponent } from './pagina/pesquisa/pesquisa.component';
import { ConfiguracaoComponent } from './pagina/configuracao/configuracao.component';
import { HistoriaComponent } from './pagina/historia/historia.component';
import { AmeacaComponent } from './pagina/ameaca/ameaca.component';
import { NpcComponent } from './pagina/npc/npc.component';
import { GruposComponent } from './pagina/grupos/grupos.component';
import { JogadoresComponent } from './pagina/jogadores/jogadores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sistema', component: SistemaComponent },
    { path: 'jogadores', component: JogadoresComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'npc', component: NpcComponent },
    { path: 'ameaca', component: AmeacaComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'configuracao', component: ConfiguracaoComponent },
    { path: 'pequisa', component: PesquisaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Registrando as rotas
    exports: [RouterModule]
})
export class AppRoutingModule { }