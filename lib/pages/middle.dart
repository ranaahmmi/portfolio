import 'dart:js';

import 'package:flutter/material.dart';
import 'package:portfolio/pages/colors.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

class MiddleScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      color: coolors.middle,
      child: Flex(
        direction: context.isMobile ? Axis.vertical : Axis.horizontal,
        children: [
          "All Creative Works.\n"
              .richText
              .withTextSpanChildren(
                  ['Selected Project'.textSpan.yellow500.make()])
              .xl4
              .white
              .make(),
          20.widthBox,
          Expanded(
              child: VxSwiper(
            items: [
              ProjectWidget(title: 'Ez Translator'),
              ProjectWidget(title: 'BUMP\'D Web App'),
              ProjectWidget(title: 'Ez Wallpaper'),
              ProjectWidget(title: 'Ez Movies'),
              ProjectWidget(title: 'Ez Photo Editor'),
            ],
            height: 170,
            viewportFraction: context.isMobile ? 0.7 : 0.4,
            autoPlay: true,
            autoPlayAnimationDuration: 1.seconds,
          ))
        ],
      ).p64().h(context.isMobile ? 500 : 300),
    );
  }
}

class ProjectWidget extends StatelessWidget {
  final String title;

  const ProjectWidget({Key key, @required this.title}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        launch('https://www.fiverr.com/share/1EyKve');
      },
      child: title.text.bold.white.xl.wide.center
          .make()
          .box
          .p8
          .roundedLg
          .alignCenter
          .square(200)
          .neumorphic(
              color: coolors.middle, elevation: 5.0, curve: VxCurve.flat)
          .make()
          .p16(),
    );
  }
}
