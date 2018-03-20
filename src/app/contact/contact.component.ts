import { Component, OnInit, Input } from '@angular/core';
import {Email} from '../email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = new Email('', '', '', '');
  constructor() { }

  ngOnInit() {
  }

}
