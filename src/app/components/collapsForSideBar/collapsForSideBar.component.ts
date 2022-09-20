import {Component,OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-collapsForSideBar',
  templateUrl: './collapsForSideBar.component.html',
  styleUrls: ['./collapsForSideBar.component.scss']
})
export class CollapsForSideBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
 
  CloserCollaps() {
    this.newItemEvent.emit();
  }
  showFiller:any=false
  showFiller2:any=false
  ArrayFiller2:any=['Toggle1','Toggle2','Toggle3','Toggle4','Toggle5','Toggle6']
  ngOnInit() {
  }
 showFillerAction(){
  this.showFiller = !this.showFiller
 }

}
