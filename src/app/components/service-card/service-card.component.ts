import { Component, Input, OnInit } from '@angular/core';
import { emptyService, IService } from 'src/models/IService';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() service: IService = emptyService();
}
