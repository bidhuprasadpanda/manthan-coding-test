import { chartListEndpoints } from "../endPoints/mock-data-endpoints";
import axios from "axios";

function getChartDataList(successCb, errorCb) {
  axios({
    method: "get",
    url: chartListEndpoints.chartDataEndpoint,
  })
    .then(function (response) {
      successCb(response);
    })
    .catch(function (error) {
      errorCb(error);
    });
}
export default { getChartDataList };
