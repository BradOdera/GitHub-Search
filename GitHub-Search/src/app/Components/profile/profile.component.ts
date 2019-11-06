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

    let repoUrl = this.RepositoryService['repos_url']
    this.repositoryService.getProfileRepos(repoUrl).subscribe(_repos => {
      console.log(this.repos);
      this.repos = this.repos;
    })
  }

  pro: any;
  findProfile(param) {
    console.log(param.value);
    this.username = param.value;
    this.repositoryService.updateProfile(this.username).subscribe(data=>{
    this.pro = data;  
    console.log(this.pro);

    this.RepositoryService = new Object(this.pro);
    console.log(this.RepositoryService);

    });

  }
  ngOnInit() {
  }

}
