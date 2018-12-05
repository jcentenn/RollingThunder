import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { writeFile } from 'write-file'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
      //saveAs(blob, './fido.txt');
      
      writeFile('./fido.txt', 'hi', function (err) {
          if (err) return console.log(err)
          console.log('file is written')
        });
  }

}
