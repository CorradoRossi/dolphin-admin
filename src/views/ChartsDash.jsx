import React from 'react';
import {Bar, Line, Doughnut, Polar} from 'react-chartjs-2';

class ChartsDash extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <main class="dash-content">
                <div class="container-fluid">
                    <h1 class="dash-title">Chart.js</h1>
                    <p class="mb-5"> These charts are made using the Chart.js library. You can find more examples and ways to configure the charts in the <a href="http://chartjs.org" target="_blank">Chart.js Documentation</a>. </p>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Two bars </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="card-body spur-card-body-chart">
                                        <Bar data={{
                                            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                            datasets: [{
                                                label: 'Blue',
                                                data: [12, 19, 3, 5, 2],
                                                backgroundColor: '#3F84FC',
                                                borderColor: 'transparent'
                                            }, {
                                                label: 'Red',
                                                data: [4, 12, 11, 2, 14],
                                                backgroundColor: '#3F84FC',
                                                borderColor: 'transparent'
                                            }]
                                        }} />                      
                                    </div>
                                </div>
                            </div>
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Line </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Doughnut data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Week',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: [
                                                '#3F84FC',
                                                '#3F84FC',
                                                '#3F84FC',
                                                '#3F84FC',
                                                '#3F84FC'
                                            ],
                                            borderColor: '#fff',
                                            fill: false
                                        }]
                                    }} />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Doughnut </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Line data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Blue',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: 'primary',
                                            borderColor: 'primary',
                                            fill: false
                                        }, {
                                            label: 'Red',
                                            data: [4, 12, 11, 2, 14],
                                            backgroundColor: 'red',
                                            borderColor: 'red',
                                            fill: false
                                        }]
                                    }} /> 
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card spur-card">
                                <div class="card-header">
                                    <div class="spur-card-icon">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                    <div class="spur-card-title"> Polar Area </div>
                                    <div class="spur-card-menu">
                                        <div class="dropdown show">
                                            <a class="spur-card-menu-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body spur-card-body-chart">
                                    <Polar data={{
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                        datasets: [{
                                            label: 'Week',
                                            data: [12, 19, 3, 5, 2],
                                            backgroundColor: [
                                                'primary',
                                                'secondary',
                                                'success',
                                                'blue',
                                                'danger',
                                            ],
                                            borderColor: '#fff'
                                        }]
                                    }} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ChartsDash;