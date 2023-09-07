import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TranslateCatalaService extends TranslateService {
  constructor(protected primeng: PrimeNGConfig) {
    super(primeng)
    this.idioma = TranslateService.IDIOMA_CATALA
    this.traduir()
  }

  protected traduccioCalendari(): object {
    return {
      dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Disabte'],
      dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
      dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
      monthNames: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Decembre'],
      monthNamesShort: ['Gen.', 'Febr.', 'Març.', 'Abr.', 'Maig', 'Juny', 'Jul.', 'Ag.', 'Set.', 'Oct.', 'Nov.', 'Des.'],
      today: 'Avui',
      clear: 'Esborrar'
    }
  }

}
