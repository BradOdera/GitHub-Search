import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "../../services/repository.service";

@Component({
  selector: 'ghs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  // RepositoryService: typeof ProfileComponent;
  username: string;
  RepositoryService: Object;

  constructor(private repositoryService: RepositoryService) {
    this.repositoryService.getProfileInfo().subscribe(ProfileComponent => {
      console.log(RepositoryService);
      this.RepositoryService = ProfileComponent;
    });

    this.repositoryService.getProfileRepos().subscribe(_repos => {
      console.log(this.repos);
      this.repos = this.repos;
    })
  }

  findProfile(param) {
    console.log(param.value);
    this.repositoryService.updateProfile(this.username);
  }
  ngOnInit() {
  }

}
