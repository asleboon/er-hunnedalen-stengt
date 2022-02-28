export type YrResponse = {
    _embedded: Embedded;
    _links:    Links;
    status:    Status;
}

type Embedded = {
    locations:    Location[];
    roadMessages?: RoadMessage[];
    route:        Route;
    webcams:      Webcam[];
}

type Location = {
    elevation: number;
    id:        string;
    name:      string;
    urlPath:   string;
}

type RoadMessage = {
    endTime:      string;
    id:           string;
    locationName: string;
    message:      string;
    position:     Position;
    roadClosed:   boolean;
    severity:     string;
    startTime:    string;
    types:        string;
    updated:      string;
}

type Position = {
    lat: number;
    lon: number;
}

type Route = {
    collection:  string;
    displayName: string;
    id:          number;
    isClosed:    boolean;
    lengthKm:    number;
    name:        string;
    routeNumber: string;
    type:        string;
    urlPath:     string;
}

type Webcam = {
    attribution:  string;
    id:           number;
    imageUpdated: string;
    imageUrl:     string;
    name:         string;
    position:     Position;
    elevation?:   number;
}

type Links = {
    parent: Parent;
    self:   Parent;
}

type Parent = {
    href: string;
}

type Status = {
    code: string;
}
