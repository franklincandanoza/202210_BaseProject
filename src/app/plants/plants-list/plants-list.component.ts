import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../Plant.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {

  plants: Array<Plant> = []
  interior: number = 0
  exterior: number = 0

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants)=> {
      this.plants = plants;
      this.interior = this.getTotalByType("Interior")
      this.exterior = this.getTotalByType("Exterior")

    });
  }

  private getTotalByType(tipo: String): number {
    return this.plants.filter(a => a.tipo == tipo).length
  }

  ngOnInit() {
    this.getPlants();
  }

}
