import 'dart:js';

import 'package:flutter/material.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:portfolio/pages/colors.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

class HeaderScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var nametext = 'Ahmad\nAnjum'
        .text
        .white
        .xl3
        .bold
        .lineHeight(1)
        .size(context.isMobile ? 13 : 20)
        .make()
        .shimmer();
    return SafeArea(
      child: VxBox(
              child: VStack([
        ZStack([
          Pictuer(),
          Row(children: [
            VStack([
              CustomAppbar(),
              30.heightBox,
              nametext,
              30.heightBox,
              VxBox()
                  .size(50, 10)
                  .color(coolors.accentColor)
                  .make()
                  .shimmer(primaryColor: coolors.middle),
              30.heightBox,
              IconsList(),
            ]).pSymmetric(h: context.percentHeight * 10, v: 32),
            Expanded(
                child: VxResponsive(
                    fallback: const Offstage(),
                    medium: Introduction()
                        .pOnly(left: 120)
                        .h(context.percentHeight * 60),
                    large: Introduction()
                        .pOnly(left: 120)
                        .h(context.percentHeight * 60)))
          ]).w(context.screenWidth)
        ])
      ]))
          .size(context.screenWidth, context.screenHeight * 0.7)
          .color(coolors.secondryColor)
          .make(),
    );
  }
}

class Introduction extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return VStack(
      [
        [
          ' - Introduction'.text.gray500.sm.widest.make(),
          10.heightBox,
          'Flutter Developer , Firebase , Dart , Web Apps\n  & Php developer '
              .text
              .white
              .maxLines(5)
              .xl3
              .make()
              .w(context.isMobile
                  ? context.screenWidth
                  : context.percentWidth * 40),
          20.heightBox,
        ].vStack(),
        RaisedButton(
          onPressed: () {},
          child: 'Visit Profile'.text.make(),
          color: coolors.middle,
          shape: Vx.roundedSm,
          hoverColor: Colors.redAccent,
        ).h(50),
      ],
      alignment: MainAxisAlignment.spaceEvenly,
    );
  }
}

class Pictuer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/mypic.png',
      fit: BoxFit.cover,
      height: context.percentHeight * 70,
    );
  }
}

class CustomAppbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Icon(
        AntDesign.codesquare,
        color: coolors.middle,
        size: 30,
      ),
    ).shimmer(primaryColor: coolors.middle);
  }
}

class IconsList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return HStack([
      Icon(
        AntDesign.twitter,
        color: Colors.white,
      ).mdClick(() {
        launch('https://twitter.com/ahmmi_rana');
      }).make(),
      20.widthBox,
      Icon(
        AntDesign.facebook_square,
        color: Colors.white,
      ).mdClick(() {
        launch('https://facebook.com/ahmadanjum62');
      }).make(),
      20.widthBox,
      Icon(
        AntDesign.instagram,
        color: Colors.white,
      ).mdClick(() {
        launch('https://instagram.com/ranaahmmi');
      }).make(),
      20.widthBox,
      Icon(
        AntDesign.github,
        color: Colors.white,
      ).mdClick(() {
        launch('https://www.fiverr.com/share/1EyKve');
      }).make(),
      20.widthBox,
    ]);
  }
}
