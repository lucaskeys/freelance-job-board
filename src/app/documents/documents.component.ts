import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";

  documents: Document[] = [
    {
      title: "My first doc",
      description: "This is the first description",
      file_url: "http://google.com", updated_at: "09/15/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "My second doc",
      description: "This is the second description",
      file_url: "http://google.com",
      updated_at: "09/15/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "My third doc",
      description: "This is the third description",
      file_url: "http://google.com", updated_at: "09/15/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
