// Dart imports:
// Flutter imports:
import 'package:flutter/material.dart';
// Package imports:
import 'package:flutter_portal/flutter_portal.dart';
import 'package:ribn_web_feedback/presentation/support/feedback/ribn_feedback_form.dart';
// Project imports:

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(RibnApp());
}

class RibnApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Portal(
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Ribn Feedback',
        home: new RibnFeedbackForm(),
      ),
    );
  }
}
