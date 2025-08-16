import { Component } from '@angular/core';
import { FashionService } from '../../services/fashion.services';
import { FashionT } from '../../models/fashionT';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-t',
  imports: [],
  templateUrl: './fashion-t.html',
})

export class FashionTrends implements OnInit {
  fashion!: FashionT;
  constructor(private fashionService: FashionService) {}
  ngOnInit(): void {
    this.fashion = this.fashionService.getFashion();  
  }
}
export {FashionT};


