export interface Club {
  name: string,
  country: string,
  location?: Location,
  year?: number,
  wins?: number,
}

export interface Location {
  lat: number,
  lon: number,
}

export interface Country {
  country: string,
  count: number,
}
