// Dart imports:

// Flutter imports:
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
// Project imports:
import 'package:ribn_toolkit/constants/colors.dart';
// Package imports:
import 'package:ribn_toolkit/widgets/molecules/messages/ribn_message_screen.dart';
import 'package:url_launcher/url_launcher.dart';

import '../constants/keys.dart';
import '../constants/routes.dart';

// import 'package:ribn/models/transaction_history_entry.dart';

class RootRouter {
  Route<MaterialPageRoute> generateRoutes(
    RouteSettings settings,
  ) {
    switch (settings.name) {
      case Routes.feedbackSuccess:
        {
          final RibnMessageScreen successScreen = RibnMessageScreen(
            title: 'Thank you for your feedback',
            topMessage:
                'Our Ribn team will review your feedback and do our best to resolve your current issue or consider your feature request in future updates.',
            bottomMessage: RichText(
              text: TextSpan(
                style: const TextStyle(fontFamily: 'DM Sans', fontSize: 13),
                children: <TextSpan>[
                  const TextSpan(
                      text:
                          'Thank you again for your support. We appreciate your help in making our services better. '
                          'Feel free to also visit our ',
                      style: TextStyle(
                          fontFamily: 'DM Sans',
                          fontSize: 13,
                          color: RibnColors.whiteColor)),
                  TextSpan(
                      text: ' Discord channel ',
                      style: const TextStyle(
                          fontFamily: 'DM Sans',
                          fontSize: 13,
                          color: RibnColors.secondary),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () async {
                          await launchUrl(Uri.parse(
                              'https://discord.com/invite/SjYVTBnsQR'));
                        }),
                  const TextSpan(
                      text: 'for help with general questions.',
                      style: TextStyle(
                          fontFamily: 'DM Sans',
                          fontSize: 13,
                          color: RibnColors.whiteColor))
                ],
              ),
            ),
            isError: false,
            width: 350,
            height: 800,
            buttonTitleColor: RibnColors.whiteColor,
            buttonTitle: 'Done',
            onTap: () {
              Keys.navigatorKey.currentState?.pushNamed(Routes.home);
            },
          );
          if (kIsWeb) {
            return pageRouteNotAnimated(successScreen, settings);
          }
          return pageRoute(
            successScreen,
            settings,
          );
        }
      case Routes.feedbackError:
        {
          final RibnMessageScreen errorScreen = RibnMessageScreen(
              title: 'Something went wrong',
              topMessage:
                  'Sorry, it looks like you are having trouble submitting your feedback or reporting a bug. Ribn wallet requires a stable internet connection to function properly. ',
              bottomMessage: RichText(
                text: TextSpan(
                  style: const TextStyle(fontFamily: 'DM Sans', fontSize: 13),
                  children: <TextSpan>[
                    const TextSpan(
                        text:
                            'If you continue to experience issues, you can reach out to us through our',
                        style: TextStyle(
                            fontFamily: 'DM Sans',
                            fontSize: 13,
                            color: RibnColors.whiteColor)),
                    TextSpan(
                        text: ' Discord channel ',
                        style: const TextStyle(
                            fontFamily: 'DM Sans',
                            fontSize: 13,
                            color: RibnColors.secondary),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () async {
                            await launchUrl(Uri.parse(
                                'https://discord.com/invite/SjYVTBnsQR'));
                          }),
                    const TextSpan(
                        text:
                            'for assistance. Thank you for your patience and understanding.',
                        style: TextStyle(
                            fontFamily: 'DM Sans',
                            fontSize: 13,
                            color: RibnColors.whiteColor))
                  ],
                ),
              ),
              isError: true,
              width: 350,
              height: 800,
              buttonTitleColor: RibnColors.whiteColor,
              buttonTitle: 'Done',
              onTap: () {
                Keys.navigatorKey.currentState?.pushNamed(Routes.home);
              });
          if (kIsWeb) {
            return pageRouteNotAnimated(errorScreen, settings);
          }
          return pageRoute(
            errorScreen,
            settings,
          );
        }
      default:
        return errorRoute();
    }
  }

  Route<MaterialPageRoute> errorRoute({
    String errorMsg = 'Unknown error occurred',
  }) {
    return MaterialPageRoute(
      builder: (context) {
        return Center(
          child: Text(
            errorMsg,
            style: const TextStyle(
              color: Colors.red,
              fontSize: 12,
            ),
          ),
        );
      },
    );
  }

  /// Builds a page route with an animation.
  Route<MaterialPageRoute> pageRoute(Widget page, RouteSettings settings) {
    return MaterialPageRoute(builder: (context) => page, settings: settings);
  }

  /// Builds a page route without an animation.
  Route<MaterialPageRoute> pageRouteNotAnimated(
    Widget page,
    RouteSettings settings,
  ) {
    return PageRouteBuilder(
      settings: settings,
      pageBuilder: (context, animation, secondaryAnimation) => page,
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        const begin = Offset(1.0, 0.0);
        const end = Offset.zero;
        final tween = Tween(begin: begin, end: end);
        final offsetAnimation = animation.drive(tween);
        return SlideTransition(
          position: offsetAnimation,
          child: child,
        );
      },
      transitionDuration: Duration.zero,
      reverseTransitionDuration: Duration.zero,
    );
  }
}
