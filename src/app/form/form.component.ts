import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { FormConfig } from '../model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @Output() Boss:any
@Input() row:any 
@Output() sndData=new EventEmitter()
@Input() config:FormConfig

  // programmerKnow=false;
  profileForm:FormGroup;
  title='Add/Edit Employee';
  id:any;

  constructor(private dataService:DataService) { 
    this.profileForm=new FormGroup({
      // company:new FormControl('',Validators.required),
      // name:new FormControl(''),
      // contact:new FormControl(),
      // country:new FormControl(''),
    })
    this.id=null;
  } 
  ngOnInit(): void {
    
    for (let field of this.config.fields) {
			this.profileForm.addControl(field.title, new FormControl());
      if(field.required){
        this.profileForm.get(field.name).setValidators(Validators.required);
      }
    }
  }
  ngOnChanges(){
    if(this.row){
    this.profileForm.patchValue(this.row)
    this.id=this.row.id;
  }
  }
  saveData(){
  const formvalues=this.profileForm.value;
  formvalues['id']=this.id;
  if(this.id){
    this.dataService.updateData(this.config.slug,formvalues);
  }else{
      this.dataService.setData(this.config.slug,this.profileForm.value)
    }
    this.profileForm.reset();
}

}
