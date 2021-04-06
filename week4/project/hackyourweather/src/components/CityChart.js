import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useFetch from "./useFetch";
import Loading from "./Loading";
import Error from "./Error";
import BackButton from "./BackButton";

const CityChart = () => {
  const { cityId } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const [cityName, setCityName] = useState({});
  const [chartData, setChartdata] = useState([]);
  const { hasError, isLoading, fetchData } = useFetch(url);

  const getWeather = async () => {
    const data = await fetchData();
    if (data) {
      setCityName({ city: data.city.name, countryCode: data.city.country });
      setChartdata(data);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="flex-container">
      <h2>5 day forecast</h2>
      <h3>
        {cityName.city}, <span>{cityName.countryCode}</span>
      </h3>
      {isLoading && <Loading />}

      {hasError.show && <Error errorMessage={hasError.errorMessage} />}

      {!isLoading && (
        <LineChart
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            border: "1px solid black",
            boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.924)",
            color: "darkblue",
            margin: "2rem",
          }}
          width={800}
          height={400}
          data={chartData.list}
          margin={{ top: 30, right: 50, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="main.temp" stroke="lightblue" />
          <CartesianGrid stroke="white" strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
        </LineChart>
      )}
      <BackButton />
    </div>
  );
};

export default CityChart;
