import { Component, OnInit } from '@angular/core';
import { Quote } from '../../modules/Quotes'
@Component({
  selector: 'app-inspire',
  templateUrl: './inspire.component.html',
  styleUrls: ['./inspire.component.css']
})
export class InspireComponent implements OnInit {
quote?:Quote[];
  constructor() { }

  ngOnInit(): void {
  }

}
