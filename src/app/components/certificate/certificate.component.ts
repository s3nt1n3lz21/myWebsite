import { Component, Input, OnInit } from '@angular/core';
import { emptyICertificate, ICertificate } from 'src/app/model/ICertificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public certificate: ICertificate = emptyICertificate();
  @Input() set certificateInput(certificate: ICertificate) {
    this.certificate = certificate;
  }
}
