import axios from 'axios/dist/axios';

export type addLoggerParam = {
  type: 'error' | 'event' | 'action';
  event: string;
  source: string;
  line: number;
  column: number;
  error: string;
};

export default class Logger {
  public baseUrl: string;
  public ADD_PATH: string;
  public key: string;

  constructor(key: string, baseUrl?: string) {
    this.baseUrl = baseUrl || 'http://localhost:8899';
    this.ADD_PATH = '/logger/append';
    this.key = key;
  }

  /**
   * 添加记录
   * @param data
   * @returns
   */
  public async add(data: addLoggerParam): Promise<boolean> {
    const { baseUrl, ADD_PATH, key } = this;
    const requestUrl = `${baseUrl}${ADD_PATH}`;

    return axios.post(requestUrl, { key, data });
  }
}
