---
title: Pipeline as a Service
---

The **Pipeline as a Service** module offers developers with a graphical means
to compose workflows, aka CI/CD pipelines, that carry out the software
verification and validation (V&V) processes in an automated fashion. Hence,
the CI/CD pipelines are associated with code repositories, since it is the
code or documentation (docs-as-code) the main target of the quality checks
that are defined in them.

## Bringing over good practices to research
Through the web-based composition of the CI/CD pipelines, the SQAaaS aims at
bringing over their proven benefits to researchers that develop their own
software solutions, without the need to permeate down into the nitty-gritty of
current technology offerings, such as
[Jenkins](https://www.jenkins.io/doc/book/pipeline/),
[GitHub Actions](https://docs.github.com/actions) or
[Travis CI](https://travis-ci.org/) (just to mention a few), which can be a
daunting task oftentimes.

With this approach, individuals and communities within the research ecosystem
will be more aware of the positive impact that relying on CI/CD pipelines
brings in the short and long term when it comes to manage the software
development life cycle.

## What can the Pipeline as a Service do for you?
### 1. Pipeline composition & sharing
The main feature and objective of the Pipeline as a Service module is to
compose on-demand and ready-to-use CI/CD pipelines based on the feedback of
the user. Thus, the web interface provides a means to distribute the resultant
pipeline so it can be successfully added to the target code repository:
1. Downloading the pipeline as a ZIP file, so that the developer needs to
   manually extract & push to the desired repository.
2. Through a [GitHub's pull request](https://docs.github.com/en/pull-requests).
   This option will automatically create a pull request to a given target
   repository. By simply merging the pull request, the pipeline will be added
   to your code repository.
### 2. Pipeline testing & refactoring
Being able to test the brand-new pipeline is a helpful feature to secure its
operation once is added to the code repository. Any failure or unintended
behaviour can be worked out by refactoring the stages that the pipeline was
broken down into.

## The process of making up a CI/CD pipeline
<p align="center">
  <img src="/img/pipeline_step_1.png"/>
</p>

The Pipeline as a Service guides you through a series of steps where settings
for the main actors in a CI/CD pipeline can be filled up, in particular:

1. The **repositories**, where the code and/or documentation lies.
2. The **services** that will take part in the software V&V.
3. The **criteria**, which groups the checks into specific software
   quality-related criteria. Each criterion can have multiple checks, and one
   check represents a different stage in the pipeline.

   :::note

   There are contraints in regards to the supported technologies and standards for
   the pipeline actors above (check out the
   [pipeline characteristics section](#characteristics-of-the-pipelines)
   for additional details):

   - Only Git repositories are supported.
   - Only container-based services (such as [Docker](https://www.docker.com/))
     can be defined.
   - The selectable criteria belongs to the [A set of Common Software Quality
     Assurance Baseline Criteria for Research
     Projects](https://github.com/indigo-dc/sqa-baseline) standard.


The last step (step 4) provides a summary of the resultant pipeline and access
to the *testing-refactoring-sharing* features described in the previous
section.


## Characteristics of the pipelines
1. CI/CD pipelines can be placed either in the same repository as the code or
   documentation, or in a separate repository. The first option is the
   *recommended approach* since the pipeline will react promptly to the
   repository events (e.g. push & pull operations) and be triggered
   automatically without the need of additional customization.
2. CI/CD pipelines are technology-specific[^1]:
   - [Git](https://git-scm.com/) is the de-facto tool for source code or
     documentation version control, and thus, the solution being adopted by
     SQAaaS. This means that *only git-based code repositories are supported*.
   - [Jenkins Pipeline as Code](https://www.jenkins.io/doc/book/pipeline/) are
     the underlying technology of the CI/CD pipelines composed through the
     current SQAaaS module. This means that *a Jenkins CI service is always
     required for the CI/CD pipelines to be executed*.
   - [Docker Compose](https://docs.docker.com/compose/) is the container
     orchestration engine used to deploy the services that take part in the
     CI/CD work. This means that the Jenkins CI service shall be configured to
     support Docker Compose agents.

[^1]: For certain features, such as pipeline execution and sharing (via
      pull requests), the current version of the Pipeline as a Service
      module only supports [GitHub](https://github.com) plaform through the
      [GitHub API](https://docs.github.com/rest). This is not an issue from
      the end user's perspective, as the resultant CI/CD pipelines can be
      used in any Git environment or social coding platform other than
      GitHub, such as [Gitlab](https://about.gitlab.com/).
