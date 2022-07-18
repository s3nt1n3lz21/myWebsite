import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../../model/ICertificate';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _certificates: ICertificate[] = [
    // {
    //   name: 'RXJS 7 And Observables: Introduction',
    //   src: 'https://www.udemy.com/certificate/UC-48f5a81f-7c33-4c19-81ed-7535af566712/',
    //   link: ''
    // }
  ]

  public get certificates() {
    return this._certificates;
  }

}
