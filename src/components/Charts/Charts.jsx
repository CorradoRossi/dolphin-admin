import React from 'react';
import {Chart} from 'chart.js';

class Charts extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const ctx = this.ctx;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                datasets: [{
                    label: 'Blue',
                    data: [12, 19, 3, 5, 2],
                    defaultFontFamily: 'Open Sans',
                    backgroundColor: '#3F84FC',
                    borderColor: 'transparent'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {

        return (
            <div className="card-body spur-card-body-chart">
                <canvas id="spurChartjsBar" 
                    ref={ctx => (this.ctx = ctx)} 
                />                        
            </div>
        );
    }
}

export default Charts;