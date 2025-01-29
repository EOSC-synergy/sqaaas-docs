---
title: Triggering the Assessment
---

Running a quality assessment for your code repository is a fairly
straightforward task. First, you need to choose the type of digital asset you
want to evaluate --i.e. source code, services or data-- in the selection tab
panel:

<p align="center">
  <img src="/img/qaa.png"/>
</p>

Once all the required inputs have been filled in, clicking on *"Start Assessment"*
button will trigger the assessment process of the selected digital object.

The state of the assessment will be displayed in the popup that appears once
started. Once finished successfully, you will be taken to the results view.

### Source code (Software)

In order to perform the assessment for a piece of software, the SQAaaS requires
only the URL of the source code repository. This is commonly the only
requirement, but there are a few more settings that can be used to customize
the input:
- `Repository URL`: the URL of the source code repository. This shall point
  only to the root path, so do not embed any info in the URL, such as the one
  related to the branch. This latter, the branch info, can be provided through
  the specific `Branch` input. 
- `External documentation repository URL` (optional): documentation, in the
  form of [docs-as-code](https://www.writethedocs.org/guide/docs-as-code/)
  approach, is part of the quality assessment, so the QAA module requires
  access to the documentation files. They are commonly placed in the code
  repository, so this input is only expected whenever the documentation is
  maintained independently. As in the previous case, a different branch other
  than the default can be specified through the `Branch` input. 

In case of a private repository, a personal access token is required to read the repository.
It is an alternative to using passwords for authentication and are intended to access resources on behalf of yourself:
- `Username`: the username on the repository platform.
- `Personal access token`: must have at least permission to read the repository.

Documentation about the creation of access tokens can be found here for
[GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
and [GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).

<p align="center">
  <img src="/img/qaa_code.gif"/>
</p>

#### Custom criteria for Software

Some criteria require additional input from the user in order to be correctly evaluated. This
is commonly the case of the testing-related criteria such as unit and functional testing. Here,
testing frameworks are diverse and they might require concrete input arguments to make them pass,
such as path location for the test cases (in non-standard paths). To this end, the SQAaaS' 
assessment module provides a means to provide such information through the `Choose criteria for
additional customization`:

<p align="center">
  <img src="/img/custom_criteria_1.png"/>
</p>

Then we can select the tool to execute. As usual, a (growing) set of tools have built-in support,
where `commands` allows the use of alternative tools through the provision of a shell command. In
the figure that follows, the `pytest` tool has been selected and the required input arguments (path,
container image URL) provided. 

<p align="center">
  <img src="/img/custom_criteria_2.png"/>
</p>

Note that when using `commmands`, providing the URL for the container image URL is highly recommended,
as the default image will most likely not contain the required tool/s.


### Service

Services imply a composite of software products (code) that are deployed
together in order to provide value to the user. In this section services can
be deployed using any of the available orchestration tools.
- `Repository URL`: the URL of the repository that contains the configuration
  files needed to orchestrate the service.
- `Choose a tool`: after selecting any of the supported tools, you will be able
  to customize it based on the information required by each one. This usually
  involves pointing to the main configuration file or path that will be used
  for the deployment part, and the selection of the cloud site where it will 
  take place.

In case of a private repository, a personal access token is required to read the repository.
It is an alternative to using passwords for authentication and are intended to access resources on behalf of yourself:
- `Username`: the username on the repository platform.
- `Personal access token`: must have at least permission to read the repository.

Documentation about the creation of access tokens can be found here for
[GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
and [GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).

<p align="center">
  <img src="/img/qaa_srv.gif"/>
</p>

### FAIR (data)

The QAA module offers also the assessment of datasets via their compliance with
the FAIR principles. This is done by relying on FAIR assessment tools that can
be choosen through the `Choose a tool` menu. 

<p align="center">
  <img src="/img/qaa_fair.gif"/>
</p>

:::note

Make sure to hit `+ Add Tool` button once all the required info has been added 
to the tool's settings. This is applicable for all the digital assets that
require the definition of tools, i.e. services and datasets.

:::
