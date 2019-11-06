import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "../../services/repository.service";

@Component({
  selector: 'ghs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  RepositoryService: typeof ProfileComponent;

  constructor(private repositoryService: RepositoryService) {
    this.repositoryService.getProfileInfo().subscribe(repository => {
      console.log(repository);
      this.RepositoryService = ProfileComponent;
    });
  }

  ngOnInit() {
  }

}
