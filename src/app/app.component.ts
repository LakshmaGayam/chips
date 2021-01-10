import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { element } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
weatherApi = [{
  cityName:'London',
  temp:40
},{
  cityName:'Hyderbad',
  temp:100
},{
  cityName:'Guntur',
  temp:96,
},
{
  cityName:'Narsaroapet',
  temp:35
},{
  cityName:'California',
  temp:68
}
]
labelArray = [];
tempRature = [];
  ngOnInit(){
    this.returnLables();
    this.retunTemprat();
    this.hello('abcde+f' , '+')
    var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      // this.labelArray means it will store all the label names from in the form of Array(Not OBject Array)
        labels: this.labelArray ,
        datasets: [{
            label: '# of Votes',
      // this.tempRature means it will store all the Tempratuer Values from in the form of Array(Not OBject Array)

            data: this.tempRature,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              // this line helps to create custom y-axis names
                ticks: {
                  callback: function(label, index, labels) {
                    return label+' c';
                }
                }
            }]
        }
    }
});
console.log(myChart.config.data)
myChart.config.data.labels.forEach(element => {
  console.log(element)
});
myChart.config.data.datasets.forEach(element => {
  console.log(element.label)
});
myChart.config.data.datasets[0].data[1] = 67;
myChart.update();
  }

  title = 'chips';
  itemsAsObjects = [{value: 0, display: 'Angular'}, {value: 1, display: 'React'}, {value: 2, display: 'Vue'}];
  valueArray = [];
  onTagEdited(event){
    console.log(event);
  }
  onItemAdded(event){
    console.log(event);
    this.valueArray.push(event.value);
    console.log(this.valueArray)
  }
  onItemRemoved(event){
    console.log(event)
    this.valueArray.push(event.value)
  }

  hello(value: string , value1: string){
    // console.log(return value.substring(value.lastIndexOf(value1) + 1));
    // this.hellow2 = value.substring(value.lastIndexOf(value1) + 1);
  }
  returnLables() {
    this.weatherApi.forEach(element => {
      console.log(element.cityName)
      this.labelArray.push(element.cityName) ;
    })
    console.log(this.labelArray)
  }
  retunTemprat() {
    this.weatherApi.forEach(element => {
      console.log(element.temp ,'GTE');
      this.tempRature.push( element.temp);
    })
  }
}
