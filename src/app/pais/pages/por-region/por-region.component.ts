import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EFTA', 'CARICOM', 'PA', 'EU', 'AU', 'USAN',
    'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  
  regionActiva: string = '';

  paises: Country[] = [];
  

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  
  activarRegion(region: string) {

    if ( region === this.regionActiva ) { return;} //click mismo boton no pasa nada
    
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe( paises => this.paises = paises);
    console.log(region);
    
  }
}
