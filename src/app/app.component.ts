import { Component, OnInit } from "@angular/core";
declare var CKEDITOR: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  public ckeditorContent: string = "";

  ngOnInit(): void {
    // Set The Name of ckEditor
    CKEDITOR.on("instanceCreated", function(event, data) {
      var editor = event.editor,
        element = editor.element;
      editor.name = "content";
    });
  }

  getData() {
    console.log(CKEDITOR.instances.content.getData());
  }
}