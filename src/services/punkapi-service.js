export default class PunkApiService {

  _apiBase = 'https://api.punkapi.com/v2/beers';

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }

    return await res.json();
  }

}


