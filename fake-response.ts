import { YrResponse } from './yr-response';
export const fakeResponse: YrResponse = {
    "_embedded": {
        "locations": [
            {
                "elevation": 552,
                "id": "1-17249",
                "name": "Sinnes",
                "urlPath": "Kingdom of Norway/Agder/Sirdal/Sinnes"
            },
            {
                "elevation": 660,
                "id": "5-44985",
                "name": "FV45 Hunnedalen",
                "urlPath": "Kingdom of Norway/Agder/Sirdal/FV45 Hunnedalen"
            },
            {
                "elevation": 366,
                "id": "1-16891",
                "name": "\u00d8vstab\u00f8",
                "urlPath": "Norge/Rogaland/Gjesdal/\u00d8vstab\u00f8"
            },
            {
                "elevation": 204,
                "id": "1-16994",
                "name": "Byrkjedal",
                "urlPath": "Kingdom of Norway/Rogaland/Gjesdal/Byrkjedal"
            }
        ],
        "roadMessages": [
            {
                "endTime": "2022-02-25T18:06:28+01:00",
                "id": "NPRA_HBT_25-02-2022.220",
                "locationName": "F450 Hunnedalsvegen i Sirdal/Gjesdal, Agder/Rogaland",
                "message": "Uv\u00e6r, vegen er stengt.\nStengt fra fylkesgrensen til Gravsst\u00f8lan, ny vurdering kl.1400",
                "position": {
                    "lat": 58.89521,
                    "lon": 6.6714535
                },
                "roadClosed": true,
                "severity": "Low",
                "startTime": "2022-02-25T10:06:28+01:00",
                "types": "PoorEnvironmentConditions,RoadOrCarriagewayOrLaneManagement",
                "updated": "2022-02-25T10:13:01.965835+01:00"
            }
        ],
        "route": {
            "collection": "fjell-sor",
            "displayName": "Hunnedalsvegen",
            "id": 11,
            "isClosed": true,
            "lengthKm": 37,
            "name": "Fv. 45 Hunnedalsvegen",
            "routeNumber": "Fv45",
            "type": "countyRoad",
            "urlPath": "Fv. 45 Hunnedalsvegen"
        },
        "webcams": [
            {
                "attribution": "Veikamera fra Statens Vegvesen",
                "id": 757779,
                "imageUpdated": "2022-02-25T09:45:55+00:00",
                "imageUrl": "https://webkamera.atlas.vegvesen.no/public/kamera?id=757779",
                "name": "F450 Hunnedalen",
                "position": {
                    "lat": 58.89333,
                    "lon": 6.666505
                }
            },
            {
                "attribution": "Veikamera fra Statens Vegvesen",
                "elevation": 370,
                "id": 548898,
                "imageUpdated": "2022-02-25T09:44:45+00:00",
                "imageUrl": "https://webkamera.atlas.vegvesen.no/public/kamera?id=548898",
                "name": "F450 \u00d8vstab\u00f8",
                "position": {
                    "lat": 58.829548,
                    "lon": 6.461728
                }
            }
        ]
    },
    "_links": {
        "parent": {
            "href": "/api/v0/routeforecast/mountainpass"
        },
        "self": {
            "href": "/api/v0/routeforecast/mountainpass/11"
        }
    },
    "status": {
        "code": "Ok"
    }
}