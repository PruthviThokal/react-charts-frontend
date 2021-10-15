import axios from "axios";

//backend request for getting one category.
export const getGraphData = async (page) => {
  const dataPoints = await axios.get(
    `http://localhost:5000/api/graphs/${page}`
  );
  return dataPoints;
};
