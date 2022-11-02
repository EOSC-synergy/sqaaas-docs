---
title: Triggering the Assessment
---

Running a quality assessment for your code repository is a quite
straightforward task, you just need to provide its URL and click on *"Start
Assessment"* button as follows:

<p align="center">
  <img src="/img/qaa.gif"/>
</p>

The state of the assessment will be displayed in the popup that appears once
started. Once finished successfully, you will be taken to the results view.

:::info

There are two main stages it will go through, 1) *the pipeline creation
and execution*, 2) *the validation of the results*. The former relies on the core
functionality provided by the Pipeline as a Service in order to compose and
run a pipeline with all the supported quality criteria. The specific tools and
commands to run are built upon the
[SQAaaS tooling metadata](https://github.com/eosc-synergy/sqaaas-tooling).

Once having the results from the pipeline, the next step is to validate the
obtained results. This task is done with the aid of the
[SQAaaS reporting](https://github.com/eosc-synergy/sqaaas-reporting) component,
a plugin-based tool that parses each output and estimates whether each
quality criterion (as well as associated subcriteria) has been successfully
fulfilled by the code being analysed.

:::

#### Settings

Current customization boils down to the specification of a different code
repository for the documentation, other than the one that hosts the code. This
is a common practice, so in case that your
[docs-as-code](https://www.writethedocs.org/guide/docs-as-code/) are not
maintained in the same repo as the code, be sure to add this URL by clicking on
the *"External repo for documentation?"* checkbox:

<p align="center">
  <img src="/img/qaa_docs_repo.png"/>
</p>
