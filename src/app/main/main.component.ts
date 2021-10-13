import { Component, Input, OnInit } from '@angular/core';
import {   PageConfig, } from '../model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() config: PageConfig ;
  // @Input() config1:FormConfig;
  data:any[];
  row:any;
 
  
  constructor(private dataservice:DataService) {
  this.row=null;
   }
  ngOnInit(): void {
  }
  
rcvEdit(event:any){
  this.row = event
}
}
