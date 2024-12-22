import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CytatyComponent } from './main/body/cytaty/cytaty.component';
import { HomeComponent } from './main/body/home/home.component';
import { InkwizycjaComponent } from './main/body/inkwizycja/inkwizycja.component';
import { Affection2Component } from './main/body/opowiadania/homeopowiadania/english/sci-fi/affection2/affection2.component';
import { CarrowComponent } from './main/body/opowiadania/homeopowiadania/fantasy/occisor/carrow/carrow.component';
import { ChessclubComponent } from './main/body/opowiadania/homeopowiadania/english/other/chessclub/chessclub.component';
import { Chessclub2Component } from './main/body/opowiadania/homeopowiadania/english/other/chessclub2/chessclub2.component';
import { DoctorComponent } from './main/body/opowiadania/homeopowiadania/english/other/doctor/doctor.component';
import { EnaffectionComponent } from './main/body/opowiadania/homeopowiadania/english/sci-fi/enaffection/enaffection.component';
import { FalangitaComponent } from './main/body/opowiadania/homeopowiadania/soldier/starozytnosc/falangita/falangita.component';
import { FinsniperComponent } from './main/body/opowiadania/homeopowiadania/soldier/wojnaswiatowa2/finsniper/finsniper.component';
import { HumanityComponent } from './main/body/opowiadania/homeopowiadania/english/other/humanity/humanity.component';
import { HusarzComponent } from './main/body/opowiadania/homeopowiadania/soldier/nowozytnosc/husarz/husarz.component';
import { LegionistaComponent } from './main/body/opowiadania/homeopowiadania/soldier/starozytnosc/legionista/legionista.component';
import { OpowiadaniaComponent } from './main/body/opowiadania/opowiadania.component';
import { OsowiecComponent } from './main/body/opowiadania/homeopowiadania/soldier/wielkawojna/osowiec/osowiec.component';
import { PersjaComponent } from './main/body/opowiadania/homeopowiadania/soldier/starozytnosc/persja/persja.component';
import { PsyComponent } from './main/body/opowiadania/homeopowiadania/soldier/wojnaswiatowa2/psy/psy.component';
import { Rozdzial1PamComponent } from './main/body/powiesci/nibypamietnik/rozdzial1-pam/rozdzial1-pam.component';
import { Rozdzial2PamComponent } from './main/body/powiesci/nibypamietnik/rozdzial2-pam/rozdzial2-pam.component';
import { Rozdzial3PamComponent } from './main/body/powiesci/nibypamietnik/rozdzial3-pam/rozdzial3-pam.component';
import { Rozdzial4PamComponent } from './main/body/powiesci/nibypamietnik/rozdzial4-pam/rozdzial4-pam.component';
import { PowiesciComponent } from './main/body/powiesci/powiesci.component';
import { Rozdzial1WitComponent } from './main/body/powiesci/wit/rozdzial1-wit/rozdzial1-wit.component';
import { Rozdzial2WitComponent } from './main/body/powiesci/wit/rozdzial2-wit/rozdzial2-wit.component';
import { Rozdzial3WitComponent } from './main/body/powiesci/wit/rozdzial3-wit/rozdzial3-wit.component';
import { Rozdzial4WitComponent } from './main/body/powiesci/wit/rozdzial4-wit/rozdzial4-wit.component';
import { WitComponent } from './main/body/powiesci/wit/wit.component';
import { RickComponent } from './main/body/rick/rick.component';
import { HomeopowiadaniaComponent } from './main/body/opowiadania/homeopowiadania/homeopowiadania.component';
import { SoldierComponent } from './main/body/opowiadania/homeopowiadania/soldier/soldier.component';
import { FantasyComponent } from './main/body/opowiadania/homeopowiadania/fantasy/fantasy.component';
import { EnglishComponent } from './main/body/opowiadania/homeopowiadania/english/english.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'opowiadania', component: OpowiadaniaComponent,
    children: [
      { path: '', component:HomeopowiadaniaComponent},
      { path: 'soldier', component:SoldierComponent},
      { path: 'fantasy', component:FantasyComponent},
      { path: 'englando', component:EnglishComponent},
      { path: 'falangita', component: FalangitaComponent },
      { path: 'legionista', component: LegionistaComponent },
      { path: 'husarz', component: HusarzComponent },
      { path: 'carrow', component: CarrowComponent },
      { path: 'humanity', component: HumanityComponent },
      { path: 'chessclub', component: ChessclubComponent },
      { path: 'doctor', component: DoctorComponent },
      { path: 'chessclub2', component: Chessclub2Component },
      { path: 'osowiec', component: OsowiecComponent },
      { path: 'persjaslon', component: PersjaComponent },
      { path: 'psy', component: PsyComponent },
      { path: 'fin', component: FinsniperComponent },
      { path: 'affection', component: EnaffectionComponent },
      { path: 'affection2', component: Affection2Component },

    ]
  },
  { path: 'ricky', component: RickComponent },
  { path: 'napewnonierickroll', component: InkwizycjaComponent },
  { path: 'napewnoniehiszpanskainkwizycja', component: RickComponent },
  { path: 'cytaty', component: CytatyComponent },
  {
    path: 'powiesci', component: PowiesciComponent,
    children: [
      
      {path:'rozdzial1-wit',component:Rozdzial1WitComponent},
      {path:'rozdzial2-wit',component:Rozdzial2WitComponent},
      {path:'rozdzial3-wit',component:Rozdzial3WitComponent},
      {path:'rozdzial4-wit',component:Rozdzial4WitComponent},

      {path:'rozdzial1-pamietnik',component:Rozdzial1PamComponent},
      {path:'rozdzial2-pamietnik',component:Rozdzial2PamComponent},
      {path:'rozdzial3-pamietnik',component:Rozdzial3PamComponent},
      {path:'rozdzial4-pamietnik',component:Rozdzial4PamComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
