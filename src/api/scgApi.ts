import axios from 'axios'
import config from '../../config/config.localhost';
import AjaxResult from 'src/common/AjaxResult';

class SCGApi {
  constructor() {

  }

  public async findXYZ(): Promise<AjaxResult> {
    const url = config.api + '/scg/find-xyz';
    const apiResult = await axios.post(url);
    return apiResult.data;
  }

  public async searchResturant(keyword: string): Promise<AjaxResult> {
    const url = config.api + '/scg/restuarant';
    const apiResult = await axios.post(url, { keyword: keyword });
    return apiResult.data;
  }
}

export const scgApi = new SCGApi();
export default scgApi;
