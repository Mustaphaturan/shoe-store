import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.scss']
})
export class SneakersComponent implements OnInit {
  @Input()
  color!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
