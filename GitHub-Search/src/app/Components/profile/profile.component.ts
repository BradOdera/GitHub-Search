import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "../../services/repository.service";

@Component({
  selector: 'ghs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile: any[];

  constructor(private repositoryService: RepositoryService) {
    this.repositoryService.getProfileInfo().subscribe(repository => {
      console.log(repository);
      this.profile = repository;
    });
  }

  ngOnInit() {
  }

}
