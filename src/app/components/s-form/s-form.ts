import { Component } from '@angular/core';
import { NgClass,NgStyle,NgIf,NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-s-form',
  imports: [FormsModule,NgClass,NgStyle,NgIf,NgFor],
  standalone:true,
  templateUrl: './s-form.html',
  styleUrl: './s-form.css'
})
export class SForm {
    firstName:string='';
    lastName:string="";
    email:string="";
    city:string="";
    address:string="";
    zip:string="";
    phone:string="";
    degrees:string[]=[];
    colleges:string[]=[];
    years:string[]=[];
    degree:string='';
    college:string='';
    year:string='';
    submitted=false;


    AddED(){
      this.degrees.push(this.degree);
      this.colleges.push(this.college);
      this.years.push(this.year);
    this.submitted=true;
    this.degree='';
    this.year='';
    this.college='';
    console.log(this.degrees)
    console.log(this.colleges)
    console.log(this.years)
    }
}
