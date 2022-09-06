import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-tabel-pagination-example',
  templateUrl: './tabel-pagination-example.component.html',
  styleUrls: ['./tabel-pagination-example.component.scss']
})
export class TabelPaginationExampleComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'Email', 'Addess','Phone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name?: string;
  position?: number;
  Phone?: number;
  Email?: string;
  Addess?: string;
  Actions?:any
}

const ELEMENT_DATA: PeriodicElement[] = [
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
