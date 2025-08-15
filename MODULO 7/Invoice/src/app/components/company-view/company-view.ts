import { Component, Input } from '@angular/core';
import { company } from '../../models/CompanyM';

@Component({
  selector: 'app-company-view',
  imports: [],
  templateUrl: './company-view.html',
})
export class CompanyView {
  @Input() company!:company;
}
