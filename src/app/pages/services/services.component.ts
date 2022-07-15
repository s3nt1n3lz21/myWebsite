import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/model/IService';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private tempService: TempService) { }

  ngOnInit(): void {
  }

  public services: IService[] = [
    {
      title: 'PERFORMANCE',
      items: [
        'Angular Lazy Loading',
        'Angular Preloading',
        'Angular On Push Change Detection',
        'Angular Manual Change Detection',
        'Angular Zones',
        'Angular Resolver Services',
        'Angular Pure Pipes',
        'Memoized Functions',
        'Caching API Responses',
        'Profiling API Requests',
        'Angular NgFor TrackBy',
        'Websockets'
      ]
    },
    {
      title: 'ROBUSTNESS',
      items: [
        'Jasmine Unit Testing',
        'Data Modelling',
        'Automated Tests',
        'Arrow Functions',
        'SOLID Design Principles',
        'HTTP Interceptor'
      ]
    },
    {
      title: 'DESIGN',
      items: [
        'Responsive Layout',
        'CSS Variables',
        'SASS Mixins',
        'Tenant Themes',
        'Transitions',
        'Animations'
      ]
    },
    {
      title: 'RESILIENCE',
      items: [
        'Caching Pipeline Dependencies'
      ]
    },
    {
      title: 'SECURITY',
      items: [
        'Routing Auth Guard',
        'User Roles',
        'Restricting Page Access',
        'API Authorisation'
      ]
    },
    {
      title: 'ACCESSIBILITY',
      items: []
    }
  ]

  // public get services() {
  //   return this._services;
  // }
}
