---
title: Scan GitHub organisation in Jenkins
---

The [GitHub plugin for Jenkins](https://plugins.jenkins.io/github) provides
the feature of scanning an entire organisation and trigger builds for the
code repositories that have changed since the last check.

<p align="center">
  <img src="/img/scan_org.png"/>
</p>

### Outcome
The **scanning process might take long**. It depends on the number and size of
the code repositories that exist under the GitHub organisation. For instance,
in our experience, scanning around 150 repositories takes slightly more than 5
minutes.

### How the SQAaaS depends on it?
This feature is leveraged by both modules:

- The Pipeline as a Service triggers the organisation scanning *when the
current pipeline repository did not exist before (first time using the given
name of the pipeline)*.
- The Quality Assessment & Awarding triggers it *when analysing the input
repository/ies for the first time*.

In both cases, the subsequent executions will not make use of this feature as
the corresponding job already exists in Jenkins and the SQAaaS API just
triggers a new build.
