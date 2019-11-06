import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private username: string;
  private clientid = 'f8c6d66d5dd07f2be391';
  private clientsecret = '2eb696503b99c7916950bb4a91c50fb30f705650';

  constructor(private http: HttpClient) {
    console.log("repository is now ready!");
    this.username = 'BradOdera';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret);
  }
}
