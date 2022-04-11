import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoutte: ActivatedRoute,
             private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoutte.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);

    /* this.activatedRoutte.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.getPaisPorAlpha(id)
          .subscribe(pais => {
            console.log(pais);
          });
      }); */
    
    
    
  }

}