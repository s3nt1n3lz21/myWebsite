import { Component, Input, OnInit } from '@angular/core';
import { ICertificate } from 'src/app/model/ICertificate';
import { emptyIService, IService } from 'src/app/model/IService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public service: IService = emptyIService()
  @Input() set serviceInput(service: IService) {
    console.log('serviceInput: ', service);
    this.service = service;
  }
}