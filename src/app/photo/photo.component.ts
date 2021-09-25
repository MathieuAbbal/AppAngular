import { Component } from '@angular/core';
import { PexelPhotoService } from '../services/pexel-photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  search: String = '';
  per_page: Number= 1;
  data: any;
  loading: boolean = false;

  constructor(private pexelService: PexelPhotoService) {
    this.pexelService.getData(this.search, this.per_page);

  }

  searchPhotos() {
    this.pexelService.getData(this.search, this.per_page).subscribe(
      (data) => {
        console.log(data);
        this.data = data.photos;
        this.loading=false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.loading = true;
 }

}
