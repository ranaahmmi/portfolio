import 'dart:js';

import 'package:flutter/material.dart';
import 'package:portfolio/pages/colors.dart';
import 'package:portfolio/pages/footer.dart';
import 'package:velocity_x/velocity_x.dart';

import 'pages/header.dart';
import 'pages/middle.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        decoration: BoxDecoration(
            gradient: LinearGradient(colors: [coolors.middle, Colors.black])),
        child: VStack([
          HeaderScreen(),
          if (context.isMobile) Introduction().p16(),
          MiddleScreen(),
          20.heightBox,
          FooterScreen(),
        ]).scrollVertical(),
      ),
    );
  }
}
