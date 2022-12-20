import { Component, OnInit } from '@angular/core';
import { clothes } from '../shared/models/clothes';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../services/clothes/clothes.service';



@Component({
  selector: 'app-clothespage',
  templateUrl: './clothespage.component.html',
  styleUrls: ['./clothespage.component.scss']
})

export class ClothespageComponent implements OnInit{

  clothes!: clothes;
  constructor(private activatedRoute:ActivatedRoute,
    private clothesService:ClothesService) {
    activatedRoute.params.subscribe((params) =>{
      if(params['id'])
      this.clothes= clothesService.getClothesById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }
}

