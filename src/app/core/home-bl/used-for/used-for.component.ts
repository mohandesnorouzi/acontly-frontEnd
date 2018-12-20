import { Component, OnInit } from '@angular/core';
import {ValueProposition} from '../home-bl.model';

@Component({
  selector: 'app-used-for',
  templateUrl: './used-for.component.html',
  styleUrls: ['./used-for.component.scss']
})
export class UsedForComponent implements OnInit {

  vp: ValueProposition[] = [
    new ValueProposition('ارسال خودکار محتوا',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/vp1.jpg'),
    new ValueProposition('ارسال خودکار محتوای دو',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/vp2.jpg'),
    new ValueProposition('ارسال خودکار محتوای سه',
      'لورم ایپسوم متن ساختگی با تولید سادگی ،  نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها' +
      ' و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' +
      ' و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
      '/assets/imgs/vp1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
