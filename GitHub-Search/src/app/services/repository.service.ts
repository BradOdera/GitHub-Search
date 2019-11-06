import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private username: any;
  private clientid = '12dd9b8dc481e22e2db7';
  private clientsecret = '5643a8dc29a524852eea8cda95b19f6f21a5a7cc';



  constructor(private http: HttpClient) {
    console.log("repository is now ready!");
    this.username = 'BradOdera';
  }


  getProfileInfo() {
    console.log(this.username);
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret" + this.clientsecret);

  }

  getProfileRepos(url) {
    return this.http.get(url);
  }

  updateProfile(username: string) {

    this.username = username;
    console.log(this.username);
    let url = "https://api.github.com/users/" + this.username.username + "?access_token=" + environment.APIKEY
    console.log(url)
    return this.http.get(url);

  }

}
