import { Component, OnInit } from '@angular/core';
import { ContributionModel } from 'src/app/models/Contribution.Model';
import { loginModel } from 'src/app/models/login.model';
import { showProjetModel } from 'src/app/models/Projet.show.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjetServiceService } from 'src/app/services/projet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(ps : ProjetServiceService,autSer : AuthService) {

    //TODO remove DEMO

    //DEMO get all User
    autSer.getAll().subscribe( us => us.forEach( u => console.log(u)) )

    //DEMO connecte as string User
    autSer.login(new loginModel("string","string"))
    //no observable on login, so maybe not connected yet for contribution

    //DEMO get ALL project and send contribution if type is encours
    ps.getAll().subscribe( (pvs : showProjetModel[]) => {

      pvs.forEach( (pj : showProjetModel) => {
        console.log(pj)
        if(pj.typeStatus === "Encours"){
          ps.addContribution(  new ContributionModel(10,pj.id)  ).subscribe( r => console.log(` contribution result : ${r} `) )
        }
      })
      
    })
   
  }

  ngOnInit(): void {
  }

}
