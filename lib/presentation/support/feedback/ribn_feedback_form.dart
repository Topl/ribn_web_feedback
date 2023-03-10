import 'dart:io';

import 'package:email_validator/email_validator.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:loading_overlay/loading_overlay.dart';
import 'package:ribn_toolkit/constants/colors.dart';
import 'package:ribn_toolkit/widgets/atoms/dropdowns/ribn_dropdown.dart';
import 'package:ribn_toolkit/widgets/atoms/large_button.dart';
import 'package:ribn_toolkit/widgets/atoms/text/ribn_font10_text_widget.dart';
import 'package:ribn_toolkit/widgets/atoms/text/ribn_font12_text_widget.dart';
import 'package:ribn_toolkit/widgets/atoms/text/ribn_font13_text_widget.dart';
import 'package:ribn_toolkit/widgets/atoms/text/ribn_font19_text_widget.dart';
import 'package:ribn_toolkit/widgets/input/ribn_text_field_with_title.dart';
import 'package:ribn_toolkit/widgets/molecules/messages/ribn_message_screen.dart';
import 'package:ribn_toolkit/widgets/molecules/note_field.dart';
import 'package:ribn_toolkit/widgets/organisms/custom_page_text_title.dart';
import 'package:ribn_web_feedback/models/images/ribn_file_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_createissue_response_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_description_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_fields_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_issue_assignee_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_issue_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_project_model.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../constants/assets.dart';
import '../../../constants/environment_config.dart';
import '../../../constants/keys.dart';
import '../../../constants/routes.dart';
import '../../../constants/strings.dart';
import '../../../models/jira/jira_content_model.dart';
import '../../../models/jira/jira_content_type_model.dart';
import '../../../services/jira/jira_service.dart';

class RibnFeedbackForm extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _RibnFeedbackFormState();
  }
}

class _RibnFeedbackFormState extends State<RibnFeedbackForm> {
  List<XFile> _imageFileList = <XFile>[];
  List<String> _imageSizes = <String>[];
  final ImagePicker _imagePicker = ImagePicker();
  final TextEditingController _emailController = new TextEditingController();
  final TextEditingController _descriptionController =
      new TextEditingController();
  bool _validForm = false, _emailValid = true, _descriptionValid = true;
  JiraService _jiraService = JiraService();
  final String _ASSIGNEE_ID = EnvironmentConfig.ASSIGNEE_ID;
  final String _ISSUE_TYPE = EnvironmentConfig.ISSUE_TYPE;
  final String _PROJECT_KEY = EnvironmentConfig.PROJECT_KEY;
  String? _selectedTitle;
  final List<String> _ISSUE_LABELS = <String>["Ribnform"];
  List<String> _dropDownItems = [
    "Report Bugs or major incident",
    "Product improvements/suggestions"
  ];
  bool _isLoading = false;
  FocusNode _focusNode = new FocusNode();
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return LoadingOverlay(
        color: RibnColors.primary,
        isLoading: _isLoading,
        child: Scaffold(
          body: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const CustomPageTextTitle(
                  title: Strings.feedbackForm,
                  hideBackArrow: true,
                  hideCloseCross: true,
                ),
                Padding(
                    padding: EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Padding(
                              padding: EdgeInsets.only(top: 20, bottom: 10),
                              child: RibnDropdown(
                                dropDownIcon: RibnAssets.chevronDown,
                                dropDownHintText: Strings.iWouldLiketTo,
                                title: 'I would like to ',
                                titleColor: RibnColors.greyText,
                                titleWeight: FontWeight.w500,
                                dropDownItems: _dropDownItems,
                                dropDownValue: _selectedTitle,
                                onChanged: (String? item) {
                                  setState(() {
                                    _selectedTitle = item!;
                                    _validForm = EmailValidator.validate(
                                            _emailController.text) &&
                                        _descriptionController.text.length >=
                                            50 &&
                                        _selectedTitle != null;
                                  });
                                },
                                dropDownIconColor: RibnColors.defaultText,
                              ),
                            )
                          ],
                        ),
                        Center(
                          child: Padding(
                            padding: EdgeInsets.only(top: 10),
                            child: Focus(
                                onFocusChange: _validateEmail,
                                onKey: (focusNode, rawKeyEvent) {
                                  // listen for backspace and call handler
                                  if (rawKeyEvent.isKeyPressed(
                                      LogicalKeyboardKey.backspace)) {
                                    setState(() {
                                      _validForm = EmailValidator.validate(
                                              _emailController.text) &&
                                          _descriptionController.text.length >=
                                              50 &&
                                          _selectedTitle != null;
                                      _emailValid = EmailValidator.validate(
                                          _emailController.text);
                                    });
                                  }
                                  return KeyEventResult.ignored;
                                },
                                child: RibnTextFieldWithTitle(
                                  inputFormatters: [],
                                  hintColor:
                                      RibnColors.greyedOut.withOpacity(0.5),
                                  controller: _emailController,
                                  hintText: 'Henryfields@gmail.com',
                                  title: 'Email',
                                  titleColor: RibnColors.defaultText,
                                  titleFontWeight: FontWeight.w400,
                                  hasError: !_emailValid,
                                )),
                          ),
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Padding(
                                padding: EdgeInsets.only(
                                  top: 10,
                                ),
                                child: Focus(
                                    onFocusChange: _validateDescription,
                                    onKey: (focusNode, rawKeyEvent) {
                                      // listen for backspace and call handler
                                      if (rawKeyEvent.isKeyPressed(
                                          LogicalKeyboardKey.backspace)) {
                                        setState(() {
                                          _validForm = EmailValidator.validate(
                                                  _emailController.text) &&
                                              _descriptionController
                                                      .text.length >=
                                                  50 &&
                                              _selectedTitle != null;
                                          _descriptionValid =
                                              _descriptionController
                                                      .text.length >=
                                                  50;
                                        });
                                      }
                                      return KeyEventResult.ignored;
                                    },
                                    child: NoteField(
                                      onChanged: (String item) {
                                        setState(() {});
                                      },
                                      hasError: !_descriptionValid,
                                      height: 150,
                                      width: 350,
                                      maxNoteLength: 500,
                                      hintTitle: Strings.description,
                                      hintText:
                                          Strings.ribnSupportDescriptionHint,
                                      controller: _descriptionController,
                                      noteLength:
                                          _descriptionController.text.length,
                                      tooltipIcon: Image.asset(
                                        RibnAssets.greyHelpBubble,
                                        width: 18,
                                        color: !_descriptionValid
                                            ? RibnColors.redColor
                                            : RibnColors.defaultText,
                                      ),
                                    )))
                          ],
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Padding(
                                padding: EdgeInsets.only(top: 10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Align(
                                      child: Padding(
                                        padding:
                                            const EdgeInsets.only(bottom: 8),
                                        child: RibnFont13TextWidget(
                                            text: "Screenshot (Optional)",
                                            textAlign: TextAlign.justify,
                                            textColor: RibnColors.defaultText,
                                            fontWeight: FontWeight.w400),
                                      ),
                                      alignment: FractionalOffset.centerLeft,
                                    ),
                                    InkWell(
                                      child: Container(
                                        height: 40,
                                        width: 350,
                                        decoration: BoxDecoration(
                                            border: Border.all(
                                              color: RibnColors.greyedOut
                                                  .withOpacity(0.5),
                                            ),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(4))),
                                        child: Row(
                                          children: [
                                            Padding(
                                              child: Container(
                                                height: 30,
                                                width: 325,
                                                decoration: BoxDecoration(
                                                    borderRadius:
                                                        BorderRadius.all(
                                                            Radius.circular(4)),
                                                    color: RibnColors
                                                        .lightGreyDivider
                                                        .withOpacity(0.5)),
                                                child: Center(
                                                  child: RibnFont10TextWidget(
                                                    text: Strings.uploadImage,
                                                    textAlign: TextAlign.center,
                                                    textColor:
                                                        RibnColors.greyedOut,
                                                    fontWeight: FontWeight.w300,
                                                  ),
                                                ),
                                              ),
                                              padding: EdgeInsets.only(
                                                  left: 10, right: 10),
                                            ),
                                          ],
                                        ),
                                      ),
                                      onTap: _imageFileList.length > 4
                                          ? null
                                          : () async {
                                              List<XFile> tempImages =
                                                  await _imagePicker
                                                      .pickMultiImage(
                                                          requestFullMetadata:
                                                              true);
                                              List<String> tempImagesSizes = [];
                                              for (int i = 0;
                                                  i < tempImages.length;
                                                  i++) {
                                                tempImagesSizes.add(
                                                    (await tempImages[i]
                                                            .length())
                                                        .toStringAsFixed(0));
                                              }
                                              setState(() {
                                                _imageFileList = [
                                                  ..._imageFileList,
                                                  ...tempImages
                                                ];
                                                _imageSizes = [
                                                  ..._imageSizes,
                                                  ...tempImagesSizes
                                                ];
                                              });
                                            },
                                    )
                                  ],
                                ))
                          ],
                        ),
                        Padding(
                            padding: EdgeInsets.only(top: 10, bottom: 20),
                            child: Column(
                              children: [
                                Container(
                                  height: 200,
                                  width: 350,
                                  decoration: BoxDecoration(
                                      border: Border.all(
                                        color: _imageFileList.length > 4
                                            ? RibnColors.redColor
                                            : RibnColors.greyedOut
                                                .withOpacity(0.5),
                                      ),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(4))),
                                  child: _imageFileList.isEmpty
                                      ? Center(
                                          child: RibnFont10TextWidget(
                                            text: 'No Images uploaded',
                                            textAlign: TextAlign.center,
                                            textColor: RibnColors.greyedOut,
                                            fontWeight: FontWeight.w300,
                                          ),
                                        )
                                      : Align(
                                          alignment: FractionalOffset.topCenter,
                                          child: ListView.builder(
                                              padding: EdgeInsets.zero,
                                              itemCount: _imageFileList.length,
                                              itemBuilder: (context, index) {
                                                return Container(
                                                  child: Row(
                                                    mainAxisAlignment:
                                                        MainAxisAlignment
                                                            .spaceBetween,
                                                    children: [
                                                      Padding(
                                                        padding:
                                                            EdgeInsets.only(
                                                                left: 10),
                                                        child: kIsWeb
                                                            ? Image.network(
                                                                _imageFileList[
                                                                        index]
                                                                    .path,
                                                                width: 50,
                                                                height: 50)
                                                            : Image.file(
                                                                File(_imageFileList[
                                                                        index]
                                                                    .path),
                                                                width: 50,
                                                                height: 50,
                                                              ),
                                                      ),
                                                      Padding(
                                                        padding:
                                                            EdgeInsets.only(
                                                                right: 130),
                                                        child: Column(
                                                          children: [
                                                            Padding(
                                                              child: RibnFont12TextWidget(
                                                                  text: _formatFileName(
                                                                      _imageFileList[
                                                                              index]
                                                                          .name),
                                                                  textAlign:
                                                                      TextAlign
                                                                          .justify,
                                                                  textColor:
                                                                      RibnColors
                                                                          .defaultText,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal),
                                                              padding: EdgeInsets
                                                                  .only(
                                                                      left: 10),
                                                            ),
                                                            Padding(
                                                              child: RibnFont12TextWidget(
                                                                  text:
                                                                      "${(int.parse(_imageSizes[index]) / (1024 * 1024)).toStringAsFixed(4)} Mb",
                                                                  textAlign:
                                                                      TextAlign
                                                                          .justify,
                                                                  textColor:
                                                                      RibnColors
                                                                          .defaultText,
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .normal),
                                                              padding: EdgeInsets
                                                                  .only(
                                                                      left: 10),
                                                            )
                                                          ],
                                                        ),
                                                      ),
                                                      Align(
                                                        child: Padding(
                                                          child: IconButton(
                                                            icon: Icon(
                                                              Icons.close,
                                                              size: 15,
                                                            ),
                                                            onPressed: () {
                                                              setState(() {
                                                                _imageFileList
                                                                    .removeAt(
                                                                        index);
                                                                _imageSizes
                                                                    .removeAt(
                                                                        index);
                                                              });
                                                            },
                                                          ),
                                                          padding:
                                                              EdgeInsets.only(
                                                                  left: 2),
                                                        ),
                                                        alignment:
                                                            Alignment.center,
                                                      )
                                                    ],
                                                  ),
                                                );
                                              }),
                                        ),
                                ),
                              ],
                            )),
                        if (_imageFileList.length > 4)
                          Padding(
                            padding: EdgeInsets.only(bottom: 25, top: 0),
                            child: Container(
                              decoration: BoxDecoration(
                                  color: RibnColors.redColor.withOpacity(0.3),
                                  border: Border.all(
                                    color: Colors.transparent,
                                  ),
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(4))),
                              child: Center(
                                child: RibnFont10TextWidget(
                                  text: 'Max of 4 images allowed',
                                  textAlign: TextAlign.center,
                                  textColor: RibnColors.redColor,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                              width: 350,
                              height: 23,
                            ),
                          ),
                        Padding(
                            padding: EdgeInsets.only(bottom: 100),
                            child: Center(
                              child: LargeButton(
                                disabled: !_validForm,
                                buttonChild: RibnFont19TextWidget(
                                  text: Strings.submitForm,
                                  textAlign: TextAlign.justify,
                                  textColor: RibnColors.whiteColor,
                                  fontWeight: FontWeight.normal,
                                  wordSpacing: 0,
                                ),
                                onPressed: _validForm
                                    ? () async {
                                        List<RibnFileModel> files = [];
                                        setState(() {
                                          _isLoading = true;
                                          _imageFileList.forEach((XFile file) {
                                            files.add(new RibnFileModel(
                                                filePath: file.path,
                                                fileType: ""));
                                          });
                                        });
                                        final JiraCreateIssueResponseModel
                                            response =
                                            await _jiraService.createJiraIssue(
                                                new JiraIssueModel(
                                                    fields: new JiraFieldsModel(
                                                        assignee:
                                                            new JiraAssigneeModel(
                                                                id:
                                                                    _ASSIGNEE_ID),
                                                        labels: _ISSUE_LABELS,
                                                        summary: _selectedTitle,
                                                        issuetype:
                                                            new JiraAssigneeModel(
                                                                id:
                                                                    _ISSUE_TYPE),
                                                        project:
                                                            new JiraProjectModel(
                                                                key:
                                                                    _PROJECT_KEY),
                                                        description:
                                                            JiraDescriptionModel(
                                                                content: <
                                                                    JiraContentModel>[
                                                              new JiraContentModel(
                                                                  content: <
                                                                      JiraContentTypeModel>[
                                                                    JiraContentTypeModel(
                                                                        text:
                                                                            'User email: ${_emailController.text}\n\n'),
                                                                    JiraContentTypeModel(
                                                                        text:
                                                                            'Description\n${_descriptionController.text}')
                                                                  ])
                                                            ]),
                                                        attachments: files)));
                                        setState(() {
                                          _isLoading = false;
                                        });
                                        if (response.success) {
                                          Navigator.push(
                                              context,
                                              new MaterialPageRoute(
                                                  builder:
                                                      (_) => RibnMessageScreen(
                                                            title:
                                                                'Thank you for your feedback',
                                                            topMessage:
                                                                'Our Ribn team will review your feedback and do our best to resolve your current issue or consider your feature request in future updates.',
                                                            bottomMessage:
                                                                RichText(
                                                              text: TextSpan(
                                                                style: const TextStyle(
                                                                    fontFamily:
                                                                        'DM Sans',
                                                                    fontSize:
                                                                        13),
                                                                children: <
                                                                    TextSpan>[
                                                                  const TextSpan(
                                                                      text:
                                                                          'Thank you again for your support. We appreciate your help in making our services better. '
                                                                          'Feel free to also visit our ',
                                                                      style: TextStyle(
                                                                          fontFamily:
                                                                              'DM Sans',
                                                                          fontSize:
                                                                              13,
                                                                          color:
                                                                              RibnColors.whiteColor)),
                                                                  TextSpan(
                                                                      text:
                                                                          ' Discord channel ',
                                                                      style: const TextStyle(
                                                                          fontFamily:
                                                                              'DM Sans',
                                                                          fontSize:
                                                                              13,
                                                                          color: RibnColors
                                                                              .secondary),
                                                                      recognizer:
                                                                          TapGestureRecognizer()
                                                                            ..onTap =
                                                                                () async {
                                                                              await launchUrl(Uri.parse('https://discord.com/invite/SjYVTBnsQR'));
                                                                            }),
                                                                  const TextSpan(
                                                                      text:
                                                                          'for help with general questions.',
                                                                      style: TextStyle(
                                                                          fontFamily:
                                                                              'DM Sans',
                                                                          fontSize:
                                                                              13,
                                                                          color:
                                                                              RibnColors.whiteColor))
                                                                ],
                                                              ),
                                                            ),
                                                            isError: false,
                                                            width: 350,
                                                            height: 800,
                                                            buttonTitleColor:
                                                                RibnColors
                                                                    .whiteColor,
                                                            buttonTitle: 'Done',
                                                            onTap: () {
                                                              Keys.navigatorKey
                                                                  .currentState
                                                                  ?.pushNamed(
                                                                      Routes
                                                                          .home);
                                                            },
                                                          )));
                                        } else {
                                          Navigator.push(
                                              context,
                                              new MaterialPageRoute(
                                                  builder: (_) =>
                                                      RibnMessageScreen(
                                                          title:
                                                              'Something went wrong',
                                                          topMessage:
                                                              'Sorry, it looks like you are having trouble submitting your feedback or reporting a bug. Ribn wallet requires a stable internet connection to function properly. ',
                                                          bottomMessage:
                                                              RichText(
                                                            text: TextSpan(
                                                              style: const TextStyle(
                                                                  fontFamily:
                                                                      'DM Sans',
                                                                  fontSize: 13),
                                                              children: <
                                                                  TextSpan>[
                                                                const TextSpan(
                                                                    text:
                                                                        'If you continue to experience issues, you can reach out to us through our',
                                                                    style: TextStyle(
                                                                        fontFamily:
                                                                            'DM Sans',
                                                                        fontSize:
                                                                            13,
                                                                        color: RibnColors
                                                                            .whiteColor)),
                                                                TextSpan(
                                                                    text:
                                                                        ' Discord channel ',
                                                                    style: const TextStyle(
                                                                        fontFamily:
                                                                            'DM Sans',
                                                                        fontSize:
                                                                            13,
                                                                        color: RibnColors
                                                                            .secondary),
                                                                    recognizer:
                                                                        TapGestureRecognizer()
                                                                          ..onTap =
                                                                              () async {
                                                                            await launchUrl(Uri.parse('https://discord.com/invite/SjYVTBnsQR'));
                                                                          }),
                                                                const TextSpan(
                                                                    text:
                                                                        'for assistance. Thank you for your patience and understanding.',
                                                                    style: TextStyle(
                                                                        fontFamily:
                                                                            'DM Sans',
                                                                        fontSize:
                                                                            13,
                                                                        color: RibnColors
                                                                            .whiteColor))
                                                              ],
                                                            ),
                                                          ),
                                                          isError: true,
                                                          width: 350,
                                                          height: 800,
                                                          buttonTitleColor:
                                                              RibnColors
                                                                  .whiteColor,
                                                          buttonTitle: 'Done',
                                                          onTap: () {
                                                            Keys.navigatorKey
                                                                .currentState
                                                                ?.pushNamed(
                                                                    Routes
                                                                        .home);
                                                          })));
                                        }
                                      }
                                    : null,
                              ),
                            ))
                      ],
                    )),
              ],
            ),
          ),
        ));
  }

  /**
   * @dev Handles validating email when in/out of focus
   */
  void _validateEmail(bool gotFocus) {
    setState(() {
      if (!gotFocus) {
        _validForm = EmailValidator.validate(_emailController.text) &&
            _descriptionController.text.length >= 50 &&
            _selectedTitle != null;
        _emailValid = EmailValidator.validate(_emailController.text);
        _focusNode.nextFocus();
      } else {
        _emailValid = true;
      }
    });
  }

  /**
   * @dev Handles validating description when in/out of focus
   */
  void _validateDescription(bool gotFocus) {
    setState(() {
      if (!gotFocus) {
        _validForm = EmailValidator.validate(_emailController.text) &&
            _descriptionController.text.length >= 50 &&
            _selectedTitle != null;
        _descriptionValid = _descriptionController.text.length >= 50;
        _focusNode.nextFocus();
      } else {
        _descriptionValid = true;
      }
    });
  }
}

_formatFileName(String fileName, {charsToDisplay = 6}) {
  const numDots = 3;
  final String dotsString = List<String>.filled(numDots, '.').join();
  final String leftSubstring = fileName.substring(0, charsToDisplay);
  final String rightSubstring = fileName.substring(fileName.length - 3);
  return '$leftSubstring$dotsString$rightSubstring';
}
