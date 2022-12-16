import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { clothes } from '../shared/models/clothes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  clothes:clothes[]=[];
  constructor(private clothesService:ClothesService) { }

  ngOnInit(): void {
    this.clothes=this.clothesService.getAll();
  }
  }


