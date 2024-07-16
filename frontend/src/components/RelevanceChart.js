import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from 'axios';
import Navbar from './Navbar';
// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const RelevanceChart = () => {
  const [scores, setScores] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/calculate_similarity');
        console.log(response.data); // Debugging line
        setScores(response.data.similarity);
      } catch (error) {
        setError('There was an error fetching the similarity scores!');
        console.error(error);
      }
    };

    fetchScores();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (scores === null) {
    return <div>Loading...</div>;
  }

  const barData = {
    labels: ['File A vs. File B'],
    datasets: [
      {
        label: 'Similarity Score',
        data: [scores],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Relevance Between Text Files',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const doughnutData = {
    labels: ['Similarity Score', 'Difference'],
    datasets: [
      {
        data: [scores, 100 - scores],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Similarity Score Distribution',
      },
    },
  };

  return (
  
    <div><Navbar/>
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '75%', margin: 'auto' }}>
      <div style={{ width: '50%' }}>
        <Bar data={barData} options={barOptions} />
      </div>
      <div style={{ width: '45%' }}>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>
    </div></div>

  );
};

export default RelevanceChart;
