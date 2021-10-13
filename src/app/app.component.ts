import { Component } from '@angular/core';
import {  PageConfig,} from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table';
  // table: TableConfig;
  // form: FormConfig;
  pageConfig:PageConfig;
  vehicalPageConfig:PageConfig;
  // Employees: any;
  constructor(){
  
      this.pageConfig={
    tableConfig:{
      slug: 'Employees',
      title: "Employees",
      columns: [
      { name: 'name',    title: 'Name'},
      { name: "company", title: "Company" },
      { name: "contact", title: "Contact" },
      { name: "country", title: "Country" },
      ]
    },
    formConfig:{
      slug:'Employees',
      title:"Add Employee",
      fields:[
        {name:'name',title:'name',type:'text' ,required:true},
        {name:'company',title:'company',type:"select" ,option:['CHI','Netsol','Nescom','AHCCreationz'],required:true},
        {name:'contact',title:'contact',type:'number',required:true},
        {name:'country',title:'country',type:'select' ,option:['Pakistan','Italy','Spain','US','Ireland','UK'],required:true}
      ]
    }
  }
  this.vehicalPageConfig={
    tableConfig:{
      slug:'Cars',
      title: 'cars',
      columns: [
        {name:'Car Name',title:'Car Name'},
        {name:"Model",title:"Model"},
        {name:"Company",title:"Company"},
      ]
    },
    formConfig:{
      slug:'Cars',
      title: 'Add car',
      fields:[
        {name:'Car Name',title:'Car Name',type:'text'},
        {name:'Model',title:"Model",type:"text"},
        {name:"Company",title:"Company",type:"text"},
      ]
    }
  }
}
}
