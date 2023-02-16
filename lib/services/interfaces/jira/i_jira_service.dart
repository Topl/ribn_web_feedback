import 'package:ribn_web_feedback/models/images/ribn_file_model.dart';
import 'package:ribn_web_feedback/models/jira/jira_issue_model.dart';

import '../../../models/jira/jira_createissue_response_model.dart';

abstract class IJiraService {
  Future<JiraCreateIssueResponseModel> createJiraIssue(JiraIssueModel model);
  Future<bool> uploadJiraIssueAttachments(
      List<RibnFileModel> files, String jiraIssueID);
}
