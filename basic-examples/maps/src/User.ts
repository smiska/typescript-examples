export class User {
    // initialize hard coded values
    name: string;
    location: {
        lat: number;
        long: number;
    }

    // initialize dynamic values
    constructor(name, lat, long) {
        this.name = name
        this.location.lat = lat
        this.location.lat = long
    }
}