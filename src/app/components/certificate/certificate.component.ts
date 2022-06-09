import { Component, Input, OnInit } from '@angular/core';
import { emptyCertificate, ICertificate } from 'src/app/model/ICertificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() certificate: ICertificate = emptyCertificate();
}
