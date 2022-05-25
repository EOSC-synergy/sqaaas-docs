---
title: Summary report
---

The Summary view provides a set of features that you can use once the CI/CD
pipeline has been successfully created. They are described in the following
sections.

## Visualize
When first landing on the Summary view, the `Config parameters` is displayed. It
provides a simple view of the main configuration values filled in during the
pipeline composition.

The pipeline itself can also be visualized by clicking on `JePL files` button.
As already mentioned, the SQAaaS platform uses the JePL library to compose a
ready-to-be-used Jenkins pipeline, and thus, the three main configuration files
required by JePL are generated:
- `Jenkinsfile`: this is the only configuration file required by Jenkins, but
when using JePL, the content of this file is actually quite simple: it loads
the required version of the JePL library and defines a unique stage, which will
dynamically create at runtime the stages defined in the `config.yml`.
- `config.yml`: it is the main configuration file of JePL. It provides a more
readable approach to configuring the pipeline (when compared with the
Jenkinsfile DSL). The main section is the `sqa_criteria` where the pipeline
work is broken down into several stages mapped to criteria IDs. Check the
[JePL documentation](https://indigo-dc.github.io/jenkins-pipeline-library) for
detailed info about the capabilities of the library.
- `docker-compose.yml`: JePL leverages
[Docker Compose](https://docs.docker.com/compose/compose-file/) to deploy the
required [tooling services](step_2_criteria.md).

Additionally, a series of bash scripts are generated when performing work on
[external repositories](step_1_repositories.md) since the workspace changes.

## Share
The ultimate goal of the Pipeline as a Service module is to generate working
pipelines that can be readily used in the code repositories. The Summary view
offers two ways to add your pipeline to the target repository:

### Download, commit & push
The initial message that notifies the pipeline's creation success contains a
`Download` button, which will return a ZIP file with the aforementioned JePL
files. Hence, you just need to extract and add (commit & push) these files to
your code repository and the pipeline will be ready to be executed.

:::note

The pipeline will be automatically triggered with no further action only in the
case that an existing Jenkins CI service is already configured to scan this
repository (e.g. when the repository belongs to a GitHub organisation that is
monitored by a given Jenkins instance). Otherwise, you will need to [set up a
Jenkins service](https://www.jenkins.io/doc/book/installing/) (or configure an
existing one) for the pipeline to work.

:::

### Via GitHub's pull request
In the event that the target repository is a GitHub repository the most
straightforward way to add your pipeline is to use the `Pull request` feature.
You just need to add the URL and target branch and the pull request will be
automatically created. Heading to GitHub and merging the pull request are the
only steps to make the new pipeline available in your repository.

<p align="center">
  <img src="/img/pull_request.gif"/>
</p>

## Execute
It is a good practice to run the CI/CD pipeline before being added to the
target repository in order to detect any defect or misbehavior. The `Try out`
button will execute the pipeline in the default Jenkins instance used by the
SQAaaS platform and, once completed, provide the pointers so you can review
the outputs.

:::note

The `Try out` feature might ask you for the URL and branch of the target
repository. This step is required whenever this target repository has not been
defined as part of the [first step](step_1_repositories.md).

:::

## Making changes
The previous [Execute](#execute) feature provides important information about
how our CI/CD pipeline will behave when running in our own code repositories.
Therefore, making changes is common task when creating a pipeline.

The most obvious way to make modifications to the current pipeline is to go
back to the [Repositories](step_1_repositories.md) and/or
[Criteria](step_2_criteria.md) steps and modify the introduced data, re-running
the pipeline, and repeating this process until we get the expected behavior or
results.

### Maintaining the "definitive" pipeline
Once you have a base pipeline, created through the SQAaaS portal, it is quite
easy to make small adjustments acting directly into the pipeline code, which,
as already mentioned, uses the [JePL library
syntax](https://indigo-dc.github.io/jenkins-pipeline-library). *When more
complex changes are needed, our recommendation is to create a new pipeline
from scratch using the portal*.

:::caution Pipelines are not preserved in the SQAaaS portal

If you did not download and/or pull-request your pipeline after the session in
the SQAaaS portal gets closed, you are at risk of losing it. This is due to the
fact that the SQAaaS does not yet support loading existing pipelines.

However, there might be a chance to get it back. The so-called *pipeline
repositories* are created by the SQAaaS platform as part of the
[Execute](#execute) process. They contain the JePL files, and depending on
how it was configured they also might have a copy of the code to analyse. By
default, the name of this code repository matches:
```
pipeline_repository == 'https://github.com/' + github_organisation + pipeline_name + '.sqaaas'
```
where the `pipeline_name` was the value provided in
[the step zero](the_2_step_process.md) of the Pipeline as a Service module. So
if you used the current SQAaaS production instance and named your pipeline as
"my_pipeline", the resultant name for th pipeline repository is:
```
https://github.com/eosc-synergy/my_pipeline.sqaaas`
```

Try to reach this repository to recover your pipeline.

*Disclaimer: the alternative presented here might not work since it depends on
the presence of temporary code repositories*

:::
