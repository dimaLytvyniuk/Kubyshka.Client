import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic.service';
import { Chart } from 'chart.js';
import { StatisticModel } from '../../models/statistic.model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
    public yearList = [2013, 2014, 2015, 2016, 2017, 2018];
    public monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    public year = 2018;
    public month = 5;

    chart = [];

    constructor(private statisticService: StatisticService) { }

    ngOnInit() {
        this.getData();
    }


    public getData() {
        this.statisticService.getIncomesPercentage()
            .subscribe(res => {
                var donughtMap = new Map(Object.entries(res));
                console.log(donughtMap);

                this.statisticService.getOutcomesPercentage()
                    .subscribe(outRes => {
                        let labels = [];
                        let data = [];
                        var outMap = new Map(Object.entries(outRes));
                        console.log(outMap);
                        let keys = outMap.forEach((value, key, map) => {
                            var oldValue = donughtMap.get(key);
                            if (oldValue !== undefined)
                                donughtMap.set(key, (oldValue + value) / 2);
                            else
                                donughtMap.set(key, value / 2);
                        });
                        keys = donughtMap.forEach((value, key, map) => {
                            labels.push(key);
                            data.push(value);
                        });

                        var trashData = {
                            labels: labels,
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: [
                                        "#FF6384",
                                        "#63FF84",
                                        "#CCFF63",
                                        "#8463FF",
                                        "#6384FF"
                                    ],
                                    borderWidth: 1
                                }]
                        };

                        this.chart = new Chart('canvas-donught', {
                            type: 'doughnut',
                            data: trashData
                        });
                    });
            });

        this.statisticService.getIncomesPerMonth(this.year, this.month)
            .subscribe(res => {
                let income = 0;
                let outcome = 0;
                var resultMap = new Map();
                var incomeMap = new Map(Object.entries(res));
                let keys = incomeMap.forEach((value, key, map) => {
                    income += value;
                    var array: Array<number> = [value, 0];
                    resultMap.set(key, array);
                });

                this.statisticService.getOutcomesPerMonth(this.year, this.month)
                    .subscribe(res2 => {
                        let labels = [];
                        let dataIn = [];
                        let dataOut = [];

                        var resMap = new Map(Object.entries(res2));
                        let keys = resMap.forEach((value, key, map) => {
                            let oldValue = resultMap.get(key);
                            if (oldValue !== undefined) {
                                oldValue[1] = value;
                                resultMap.set(key, oldValue);
                            }
                            else {
                                var array: Array<number> = [0, value];
                                resultMap.set(key, array);
                            }
                            console.log(resultMap);
                            outcome += value;
                        });

                        keys = resultMap.forEach((value, key, map) => {
                            dataIn.push(value[0]);
                            dataOut.push(value[1]);
                            labels.push(key);
                        });
                        console.log(dataOut);
                        this.chart = new Chart('canvas', {
                            type: 'bar',
                            data: {
                                labels: labels,
                                datasets: [
                                    {
                                        label: "Incomes",
                                        backgroundColor: "#8463FF",
                                        data: dataIn
                                    },
                                    {
                                        label: "Outcomes",
                                        backgroundColor: "#FF6384",
                                        data: dataOut
                                    }
                                ]
                            },
                            options: {
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }
                        });

                        var oilData = {
                            labels: ["Outcome", "Income"],
                            datasets: [
                                {
                                    data: [outcome, income],
                                    backgroundColor: [
                                        "#FF6384",
                                        "#8463FF"
                                    ],
                                    borderWidth: 1
                                }]
                        };

                        var chartOptions = {
                            rotation: -Math.PI,
                            cutoutPercentage: 30,
                            circumference: Math.PI,
                            legend: {
                                position: 'left'
                            },
                            animation: {
                                animateRotate: false,
                                animateScale: true
                            }
                        };

                        this.chart = new Chart('canvas-half-circle', {
                            type: 'doughnut',
                            data: oilData,
                            options: chartOptions
                        });
                    });
            });
    }

    public onChange() {
        this.getData();
    }
}
