import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'app-proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {


  proposalOne: Proposal = new Proposal('image.com', 15, 'ABC Company', 'Ruby on Rails', 150, 120, 15, 'lk@gmail.com');
  proposalTwo: Proposal = new Proposal('image.com', 99, 'ABC Company', 'Ruby on Rails', 150, 120, 15, 'lk@gmail.com');
  proposalThree: Proposal = new Proposal('image.com', 300, 'XYZ Company', 'Ruby on Rails', 200, 120, 15, 'lk@gmail.com');


  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree];

}
