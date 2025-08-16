import { Injectable } from '@angular/core';
import { FashionT } from '../models/fashionT';
import { fashionTData } from '../data/fashionTData';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
    private fashion: FashionT = fashionTData;
    constructor() {}
    getFashion(): FashionT {
        return this.fashion;
    }   
}
