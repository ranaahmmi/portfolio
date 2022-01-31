import 'dart:js';

import 'package:flutter/material.dart';
import 'package:portfolio/pages/colors.dart';
import 'package:portfolio/pages/header.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

class FooterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return VStack(
      [
        VxDevice(
          mobile: VStack([
            "Get a Project\nLet's talk.".text.center.white.xl2.make(),
            10.heightBox,
            InkWell(
              onTap: () {
                launch('https://www.fiverr.com/share/1EyKve');
              },
              child: "ahmadanjum62@gmail.com"
                  .text
                  .color(Colors.redAccent)
                  .semiBold
                  .make()
                  .box
                  .border(color: Colors.red)
                  .p16
                  .rounded
                  .make(),
            )
          ]),
          web: HStack(
            [
              "Get a Project?\nLet's talk.".text.center.white.xl2.make(),
              10.widthBox,
              InkWell(
                onTap: () {
                  launch('https://www.fiverr.com/share/1EyKve');
                },
                child: "ahmadanjum62@gmail.com"
                    .text
                    .color(Colors.redAccent)
                    .semiBold
                    .make()
                    .box
                    .border(color: Colors.red)
                    .p16
                    .rounded
                    .make(),
              )
            ],
            alignment: MainAxisAlignment.spaceAround,
          ).w(context.safePercentWidth * 70).scale150().p16(),
        ),
        50.heightBox,
        CustomAppbar(),
        10.heightBox,
        "Thanks For Scrolling,".richText.semiBold.white.withTextSpanChildren(
            ["that's all flolks".textSpan.gray500.make()]).make()
      ],
      crossAlignment: CrossAxisAlignment.center,
    ).wFull(context).p16();
  }
}
