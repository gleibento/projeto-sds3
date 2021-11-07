/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale';
import { useEffect, useState } from 'react';


type ChartData = {
    labels: string[];
    series: number[];
}
const DonutChar = () => {


    const [ChartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sum-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.salerName);
                const mySeries = data.map(x => x.sum);
                setChartData({ labels: myLabels, series: mySeries });

            });

    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: ChartData.labels }}
            series={ChartData.series}
            type="donut"
            height="240"

        />
    );
}
export default DonutChar;