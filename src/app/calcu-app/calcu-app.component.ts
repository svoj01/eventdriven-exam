import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu-app',
  templateUrl: './calcu-app.component.html',
  styleUrls: ['./calcu-app.component.css']
})
export class CalcuAppComponent implements OnInit {

  buttons = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','=','clear'];
  ans = ''

  constructor() { }


  calcu($event:any){
    var button = $event.srcElement.innerText;
    if(button == '='){
      this.ans = eval(this.ans);
    }
    else if(button == 'clear'){
      this.ans = '';
    }
    else{
      this.ans += button;
    }
  }

  ngOnInit(): void {
  }

}
