import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fileupload",
  templateUrl: "./fileupload.component.html",
  styleUrls: ["./fileupload.component.css"]
})
export class FileUploadComponent {
  constructor(private http: HttpClient){}
  seletedFile: File  = null;
  insertMessage="";
  collectionName = "";
  errorMessage = "Please Enter a value into both fields";
  errorInput = false ;
  onFileSelected(event)  {
    console.log(event);
    this.seletedFile= <File> event.target.files[0];
  }
  onUpload()
  {
    if(this.seletedFile === null ||this.collectionName === "" )
    {
      this.errorInput =true ;
      return ;
    }
    this.errorInput=false;
    const fd = new FormData();
    fd.append('file',this.seletedFile , this.seletedFile.name);
    fd.append('collection',this.collectionName);
    console.log( 'this is collection name'+this.collectionName);
    this.http.post('http://localhost:3333/upload',fd).subscribe(res=>{
      console.log(res);
      this.insertMessage=res["message"];
    });
  }
}
