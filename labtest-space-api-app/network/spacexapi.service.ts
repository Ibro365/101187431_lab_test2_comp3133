import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root", })
export class SpacexDataService {

    private REST_API_ENDPOINT = 'https://api.spacexdata.com/v3/launches';

    constructor(private httpClient: HttpClient) {}

    public getAllMissions(): any {
        return (this.httpClient.get(this.REST_API_ENDPOINT));
    }

    public getMissionsById(id: number): any {
        return this.httpClient.get(`${this.REST_API_ENDPOINT}/${id}`);
    }
}
