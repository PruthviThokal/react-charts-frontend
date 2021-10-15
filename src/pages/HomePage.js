import React, { useState, useEffect } from "react";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { getGraphData } from "../functions/graphData";
import PaginationComp from "../components/PaginationComp";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [graphDataPoints, setGraphDataPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showDataPoints(page);
  }, [page]);

  //console.log(JSON.stringify(graphDataPoints));
  const showDataPoints = async (page) => {
    setLoading(true);
    const data = await getGraphData(page);
    console.log(data);
    setGraphDataPoints(data.data);
    setLoading(false);
  };
  return (
    <>
      <section className="home-section">
        <div className="container-fluid">
          <div className="container-fluid px-auto py-2" id="graph_page_one">
            <div className="col">
              {loading ? (
                <h4 className="text-danger">Loading....</h4>
              ) : (
                graphDataPoints.map((element, index) => (
                  <span key={index}>
                    <div className="h-75 col card mr-3">
                      <div className="card-body px-1 py-2">
                        <div className="card-title">Card Title</div>
                        <div className="card-text">
                          <TimeSeriesChart dataPoints={element} />
                        </div>
                      </div>
                    </div>
                    <br />
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <br />
        <PaginationComp />
        <br />
      </section>
    </>
  );
};

export default HomePage;
