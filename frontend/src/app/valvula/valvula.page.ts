import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from '../model/log';
import { LogService } from '../services/log.service';


@Component({
  selector: 'app-valvula',
  templateUrl: './valvula.page.html',
  styleUrls: ['./valvula.page.scss'],
})
export class ValvulaPage implements OnInit {

  public logs : Array<Log> = new Array<Log>();
  constructor(private router:ActivatedRoute, private logService:LogService) { }

  ngOnInit() {
    let electroValvulaId = this.router.snapshot.paramMap.get('id');

    this.logService.listLogs(parseInt(electroValvulaId)).then((result) => {
      this.logs = result
    });
  }

}
