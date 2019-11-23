import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiURL = "https://api.epicsevendb.com/api/";
//schema 1: {:hero|artifact}/{:?_id}/{:?assetType}.{:imageExtension}
//schema 2: {:item|class|attribute|buff|relationship|zodiac-sign}/{:?_id}.{:imageExtension}
const assetsURL = "https://assets.epicsevendb.com/";
// routes
const artifact = "artifact/";
const attrib = "attribute/";
const buff = "buff/"; 
const role = "class/";
const hero = "hero/";
const item = "item/";
const relation = "relationship/";
const zodiac = "zodiac-sign/";

const png = ".png";
const skill = "sk_#";

enum Images {
  full = "full",
  small = "small",
  icon = "icon",
}

@Injectable()
export class EpicSevenDbService {

  constructor(private http: HttpClient) { }

  // api.epicsevendb.com/api/artifact/
  getArtifacts(): Observable<Object> {
    return this.http.get(apiURL + artifact);
  }

  // api.epicsevendb.com/api/artifact/_id
  getArtifact(id: string): Observable<Object> {
    return this.http.get(apiURL + artifact + id);
  }

  // api.epicsevendb.com/api/hero/
  getHeroes(): Observable<Object> {
    return this.http.get(apiURL + hero);
  }

  // api.epicsevendb.com/api/hero/_id
  getHero(id: string): Observable<Object> {
    return this.http.get(apiURL + hero + id);
  }

  // api.epicsevendb.com/api/item/
  getItems(): Observable<Object> {
    return this.http.get(apiURL + item);
  }

  // api.epicsevendb.com/api/item/_id
  getItem(id: string): Observable<Object> {
    return this.http.get(apiURL + item + id);
  }

  getArtifactIcon(id: string): Observable<Object> {
    console.log(assetsURL + artifact + id + "/" + Images.icon + png)
    return;
    //return this.http.get(assetsURL + artifact + id + "/" + Images.icon + png);
  }
}