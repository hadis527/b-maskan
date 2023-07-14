import React, { useEffect, useState } from "react";
import LineChart from "../../components/charts/lineChart";
import { IndexHistoryWrapper, ChartContainer } from "./styles"

const IndexHistory = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    makeChartData(data);
  }, [data]);

  const makeChartData = (data) => {
    let finalPrice = [];
    let lastPrice = [];
    let result = [];
    let years = [];

    if (data !== undefined && data.length > 0) {
      data.map(each => {
        finalPrice.push(each.xNivInuClMresIbs);
        lastPrice.push(each.xNivInuPbMresIbs);
        years.push(each.dEven);
      });
      result.push({ name: "قیمت نهایی", data: finalPrice });
      result.push({ name: "آخرین قیمت", data: lastPrice });
      setChartData(result);
      setYears(years);
    }
  }
  return (
    <IndexHistoryWrapper>
      <ChartContainer>
        <LineChart
          series={chartData}
          height={500}
          years={years}
          xTitle="تاریخ"
          yTitle="قیمت" />
      </ChartContainer>
    </IndexHistoryWrapper>
  )
}
export default IndexHistory;