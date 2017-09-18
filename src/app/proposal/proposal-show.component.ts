import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'app-proposal-show',
  templateUrl: 'proposal-show.component.html'
})

export class ProposalShowComponent implements OnInit {

  id: number;
  routeId: any;

  constructor(private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      // subscribe gives us access to the object we want to communicate with
      params => {
        this.id = +params['id'];
        // + converts it into a number 
      }
    )
  }
}
