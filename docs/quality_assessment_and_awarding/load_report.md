---
title: Loading a previously-generated QAA report 
---

With this feature you don't need to retrigger the assessment for any revision
of code/service/data that has been already evaluated. The only requirement is
to keep the associated JSON file that is generated as part of any QAA report.
This JSON file contains all the details from the quality assessment exercise,
and thus, could be reloaded by the SQAaaS web.

Within a QAA report, the JSON file can be downloaded from the `Download` menu
located on the top right-hand corner of the page. Here is where you can also
download the report in PDF and PNG formats.

<p align="center">
  <img src="/img/qaa_json_download.png"/>
</p>

Then this JSON file can be used to recover the QAA report by heading to the
QAA module's input page and using it in the `Load QAA report from previous
assessment` dropdown menu as showed in the image below:

<p align="center">
  <img src="/img/qaa_load_qa_report.gif"/>
</p>
