import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DialogWithEditComponent } from '../dialog-with-edit/dialog-with-edit.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import {  MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name?: string;
  position?: number;
  Phone?: number;
  Email?: string;
  Addess?: string;
  Actions?:any
}

const dataSource: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', Email: 'test@hotmail.com', Addess: 'Homs',Phone:+99699},
  {position: 2, name: 'Helium', Email: 'test222@hotmail.com', Addess: 'Hama',Phone:+99699},
  {position: 3, name: 'Lithium', Email: 'tes1121te@hotmail.com', Addess: 'Raqa',Phone:+99699},
  {position: 4, name: 'test', Email: 'tes11312321t@hotmail.com', Addess: 'Damascus',Phone:+99699},
  {position: 5, name: 'test2', Email: 'tesfsaf111t@hotmail.com', Addess: 'Alepo',Phone:+99699},
  {position: 6, name: 'test22', Email: 'tes111tfsafas@hotmail.com', Addess: 'Qamshli',Phone:+99699},
  {position: 7, name: 'test55', Email: 'tes11fasfa1t@hotmail.com', Addess: 'Dir Alzor',Phone:+99699},
  {position: 8, name: 'test777', Email: 'tes111fsafsat@hotmail.com', Addess: 'Idlib',Phone:+99699},
  {position: 9, name: 'test7', Email: 'tes111fsafast@hotmail.com', Addess: 'Raqa',Phone:+99699},
 
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['select', 'position', 'name', 'Email','Phone', 'Addess','Actions'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = [...dataSource];
  dataSources = new MatTableDataSource<PeriodicElement>(dataSource);
  @ViewChild(MatTable) table:any=  MatTable<PeriodicElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator:any  = this.paginator;
  // }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
   addData() {
    this.dataSource.push({position:dataSource.length+1});
    this.table.renderRows();
    dataSource.length=dataSource.length+1
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }


    this.selection.select(...this.dataSource);
  }
  deleteData(){
    this.dataSource.pop();
    this.dataSource=[...this.dataSource];
  }
  deleteRow(id:number){ 
      this.dataSource = this.dataSource.filter((u) => u.position !== id);  
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }

  constructor(private _dialog: MatDialog) { }
  openDialog(row: PeriodicElement) {
    console.log('Row clicked', row);
    const dialog = this._dialog.open(DialogWithEditComponent, {
     width:'do'
    }).afterClosed()
    .subscribe((closeDialog: Boolean) => {
      if (closeDialog) {
        this.dataSource = this.dataSource.filter((u) => u.position !== row);  
      } 
    });
  }
  openDialogEdit(row: PeriodicElement) {
    console.log('Row clicked', row);
    const dialog = this._dialog.open(DialogEditComponent, {
      width: '250px',
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    }).afterClosed()
    .subscribe((closeDialog: Boolean) => {
      if (closeDialog) {
        this.dataSource = this.dataSource.filter((u) => u.position !== row);  
      } 
    });
  }
  ngOnInit(): void {
  }

}