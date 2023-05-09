---
title: Tools for the quality assessment
---

Once the 'Run Assessment' button is clicked the SQAaaS will go through two
main stages: 1) *the pipeline creation and execution*, 2) *the validation
 of the results*. The former leverages the Pipeline as a Service module in
order to compose and run a pipeline with all the supported quality criteria.

The specific tools and commands to run are built upon the
[SQAaaS tooling metadata](https://github.com/eosc-synergy/sqaaas-tooling).

Once having the results from the pipeline, the next step is to validate the
obtained results. This task is done with the aid of the
[SQAaaS reporting](https://github.com/eosc-synergy/sqaaas-reporting) component,
a plugin-based tool that parses each output and estimates whether each
quality criterion (as well as associated subcriteria) has been successfully
fulfilled by the code being analysed.

## Tool breakdown

Validating some of the defined quality criteria requires the support of
specific tools, based commonly on the programming language/s in use. Examples
range from testing frameworks and linters to style checkers. The table below 
summarizes the current tools supported by the SQAaaS platform:

|                                   | VCS |
|-----------------------------------|:---:|
| Code Management (QC.Man, QC.Acc)  | git |

|                                   | Python |    Golang   |   Ruby  |    Java    | Javascript |   JSON   | Dockerfile |
|-----------------------------------|:------:|:-----------:|:-------:|:----------:|:----------:|:--------:|:----------:|
| Code Style (QC.Sty)               | flake8 | staticcheck | rubocop | checkstyle |  stylelint | jsonlint |  hadolint  |
| Security Static Analysis (QC.Sec) | bandit |    gosec    |         |            |            |          |            |


|                                   |   Markdown   |   reStructuredText    |
|-----------------------------------|:------------:|:---------------------:|
| Documentation (QC.Doc)            | markdownlint | restructuredtext-lint |
