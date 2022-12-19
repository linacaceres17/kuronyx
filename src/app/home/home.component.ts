import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { clothes } from '../shared/models/clothes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  clothes:clothes[]=[];
  constructor(private clothesService: ClothesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.clothes = this.clothesService.getAll().filter(clothes =>clothes.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
      this.clothes=this.clothesService.getAll();
    })

    
  }
  }


