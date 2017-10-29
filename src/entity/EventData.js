export class EventData {

    constructor() {
        this._assets =  [
            {
                id: 1,
                name: "Image 1"
            },
            {
                id: 2,
                name: "Image 2"
            },        {
                id: 3,
                name: "Image 3"
            }
        ];  
    }

    getAssets() {
        return this._assets;
    }
          
}