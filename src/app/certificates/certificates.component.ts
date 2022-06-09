import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../model/ICertificate';

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
    {
      title: 'RXJS 7 And Observables',
      url: '',
      description: ''
    }
  ]

  public get certificates() {
    return this._certificates;
  }

}
