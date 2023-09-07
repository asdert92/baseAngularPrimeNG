import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export abstract class TranslateService {
  static IDIOMA_CATALA: string = 'ca'
  static IDIOMA_ESPANOL: string = 'es'

  protected idioma?: string

  constructor(protected primeng: PrimeNGConfig) { }

  protected traduir() {
    const idiomaSeleccionat = this.idiomesDisponibles().find((actual) => actual.codi == this.idioma)
    if (!idiomaSeleccionat) {
      throw new Error("No existeix el idioma indicat");
    }

    const traduccions = { ...this.traduccioCalendari() }
    this.primeng.setTranslation(traduccions)
  }

  protected traduccioCalendari(): object {
    // TODO: Agregar parametro firstDayOfWeek="1" en el componente p-calendar
    /**
     * <p-calendar firstDayOfWeek="1" dateFormat="dd/mm/yy"></p-calendar>
     */

    return {}
  }

  public idiomesDisponibles(): any[] {
    return [
      { codi: TranslateService.IDIOMA_CATALA, descripcio: 'Català' },
      { codi: TranslateService.IDIOMA_ESPANOL, descripcio: 'Español' },
    ]
  }
}
