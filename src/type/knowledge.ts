export interface Knowledge {
  showapi_res_error: string;
  showapi_res_code: number;
  showapi_res_body: Showapiresbody;
}
interface Showapiresbody {
  ret_code: number;
  list: List[];
}
interface List {
  id: number;
  name: string;
}
