import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TranslateEspanolService extends TranslateService {

  constructor(protected primeng: PrimeNGConfig) {
    super(primeng)
    this.idioma = TranslateService.IDIOMA_ESPANOL
    this.traduir()
  }

  protected traduccioCalendari(): object {
    // TODO: Agregar parametro firstDayOfWeek="1" en el componente p-calendar

    return {
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ag.', 'Set.', 'Oct.', 'Nov.', 'Dic.'],
      today: 'Hoy',
      clear: 'Limpiar'
    }
  }
}
