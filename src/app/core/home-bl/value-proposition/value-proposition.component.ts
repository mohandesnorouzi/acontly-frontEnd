import {Component, OnInit} from '@angular/core';
import {ValueProposition} from '../home-bl.model';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrls: ['./value-proposition.component.scss']
})
export class ValuePropositionComponent implements OnInit {

  vp: ValueProposition[] = [
    new ValueProposition('ارسال خودکار محتوا',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/01 pic.png'),
    new ValueProposition('ارسال خودکار محتوای دو',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/02 pic.png'),
    new ValueProposition('ارسال خودکار محتوای سه',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/03 pic.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
