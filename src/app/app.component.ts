import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateCatalaService } from './services/primeng/translate-catala.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.configurarPrimeng()
  }

  private configurarPrimeng() {
    this.primengConfig.ripple = true
    const traductor = new TranslateCatalaService(this.primengConfig)
  }
}
