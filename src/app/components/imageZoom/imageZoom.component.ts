import { Component, OnInit } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-imageZoom',
  templateUrl: './imageZoom.component.html',
  styleUrls: ['./imageZoom.component.css']
})
export class ImageZoomComponent implements OnInit {
    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
  title = "CodeSandbox";
 
  public imagePath:any;
  imgURL: any;
  public message?:string;
 
  previewImageSrc: any;
  zoomImageSrc: any;
  enableZoom: boolean = true;
  constructor(private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }
    ]);
  }
 
  preview(files:any) {
    if (files.length === 0) return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      //this.imgURL = reader.result;
      this.previewImageSrc = reader.result;
      this.zoomImageSrc = reader.result;
    };
  }
  ngOnInit() {
  }

}
