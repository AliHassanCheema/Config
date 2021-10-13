import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import {  TableColumn, TableConfig } from '../model';

import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Output() editData =new EventEmitter()
  @Input() config:TableConfig;
  title="Employees"
  data: any[] = [];
  selectedRow:any;
  // limit:any;
  // offSet:any;
  
//   birthday=new Date(1999,0, 22);
  displayColumn : TableColumn[];


  constructor(private dataService:DataService) {
    this.displayColumn = []
    this.selectedRow   = null;
    // this.limit='10';
    // this.offSet=null;
  }

  getEmployeeData(){
    this.dataService.getData(this.config.slug).subscribe(employees=>
      this.data=employees);
      console.log(this.data)
  }

   select(d:any){
     if(this.selectedRow==d){
       this.selectedRow=null;
     }else{
       this.selectedRow=d;
     }
    }
  ngOnInit(): void {
    this.getEmployeeData();
    for(let col of this.config.columns){
      this.displayColumn.push(col);
    }
  }
  editRow(){
    this.editData.emit(this.selectedRow);
    this.selectedRow=null;
  }

  delete() {
   this.dataService.deleteData(this.config.slug,this.selectedRow);
   this.selectedRow=null;
  }
  // onPageChange(ev:PageEvent):void{
  //   this.limit=ev.pageSize;
  //   this.offSet=(ev.pageSize*(ev.pageIndex+1));
  //   this.filterData();
  // }
  // filterData(){
  //   this.data.filter((val ,idx)=>{
  //     if((idx)>(this.offSet-(this.limit+1))&&(idx<this.offSet &&(idx)<(this.data.length))){
  //       return val;
  //     }
  //   })
  // }
}

