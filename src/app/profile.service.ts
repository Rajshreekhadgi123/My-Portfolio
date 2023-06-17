import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about1 = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."

  projects:any = [
    {
      id: 1,
      title: 'Designed a Clone of Zebronics Website',
      desc: '',
      livedemo: 'https://rajshreekhadgi123.github.io/Zebronics-Angular/',
      githurl: 'https://github.com/Rajshreekhadgi123/Zebronics-Angular',
      imgUrl: '../../../assets/Zebronics.png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap'
    },

    {
      id: 2,
      title: 'Designed a Clone of Bigbasket Website',
      desc: '',
      livedemo: 'https://bigbasket-clone-angular.netlify.app/',
      githurl: 'https://github.com/Rajshreekhadgi123/BigBasket-Angular',
      imgUrl: '../../../assets/bigbasket.png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap'
    },


    {
      id: 3,
      title: 'Vaccination Management System',
      desc: '',
      livedemo: 'https://rajshreekhadgi123.github.io/Vaccination-Management-System/',
      githurl: 'https://github.com/Rajshreekhadgi123/Vaccination-Management-System',
      imgUrl: '../../../assets/Vaccination .png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap'
    },

    {
      id: 4,
      title: 'Food Order Management',
      desc: '',
      livedemo: 'https://rajshreekhadgi123.github.io/Food-Management-System/',
      githurl: 'https://github.com/Rajshreekhadgi123/Food-Management-System',
      imgUrl: '../../../assets/foodorder.png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap , Typescript'
    },


    {
      id: 5,
      title: 'Bank Management System',
      desc: '',
      livedemo: 'https://reliable-ganache-9d4556.netlify.app/',
      githurl: 'https://github.com/Rajshreekhadgi123/Bank-Management-System',
      imgUrl: '../../../assets/bank.png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap , Typescript'
    },



    {
      id: 6,
      title: 'College Management System',
      desc: '',
      livedemo: 'https://rajshreekhadgi123.github.io/College-Manabgement-System/',
      githurl: 'https://github.com/Rajshreekhadgi123/College-Manabgement-System',
      imgUrl: '../../../assets/college.png',
      tech: 'Angular 15 , HTML , SCSS , Bootstrap , Typescript'
    },


  ]

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 15',
      'progress': '60%'
    },
    {
      'id': '2',
      'skill': 'HTML5',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'CSS3',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'Javascript',
      'progress': '60%'
    },
    {
      'id': '5',
      'skill': 'Bootstrap 5',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'UI Designing',
      'progress': '80%'
    },
    {
      'id': '7',
      'skill': 'Typescript',
      'progress': '50%'
    },
    {
      'id': '8',
      'skill': 'Wordpress',
      'progress': '70%'
    },
    
  ];





  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }
  


}
