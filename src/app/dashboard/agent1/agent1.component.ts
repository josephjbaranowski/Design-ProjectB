import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.scss']
})
export class Agent1Component implements OnInit {

  constructor() {
    function MyCtrl($scope) {

      $scope.myvalue = false;

      $scope.showLicense = function(){
        $scope.myvalue = true;
      };
  } }

  ngOnInit() {
  }

}
