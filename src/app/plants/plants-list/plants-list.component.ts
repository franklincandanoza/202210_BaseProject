import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {

  plants: Array<Plant> = []
  tipos = new Map<String, number>();

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants)=> {
      this.plants = plants;
      this.loadTotalByType()

    });
  }

  loadTotalByType(): void{

    this.plants.forEach(a => {
      this.tipos.set(a.tipo, (this.tipos.get(a.tipo)?? 0) +1 )
    });
  }

  ngOnInit() {
    this.getPlants();
  }

}
