import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  LogoImageSrc: any = '../../../assets/images/TransparentLogo1.png';
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
