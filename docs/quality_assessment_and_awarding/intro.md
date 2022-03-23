---
title: Introduction
---

The Quality Assessment & Awarding (QAA) module analyzes the level of
compliance of a given code repository with a set of
[standards for software](https://github.com/indigo-dc/sqa-baseline).

## What does the QAA module bring?
For any given code repository the QAA performs an assessment through the
selection and subsquent execution of the right set of open source tools. The
tools that will be ran for each quality criterion (such as licensing,
documentation, unit or security testing) are defined beforehand, and their
outputs are parsed in order to certify whether such criterion was successfully
or unsuccessfully fulfilled.

With this information the QAA provides two main outcomes:
1. A **quality report** with the results of the assessment. The validity of
   each quality criterion is computed according to the outputs provided by the
   tools.
2. A **digital badge** highlighting the achievements of the software. The
   SQAaaS supports three of badges for software that, from lowest to highest
   levels of quality are: bronze, silver and gold.

## What happens under the hood
Unsurprinsingly, the assessment process uses a CI/CD pipeline in order to
execute the complete set of tools selected to cover the required quality
criteria.

### Composing the pipeline
The

### Validating the results
For tackling the validation, the SQAaaS API relies on the metadata defined in
the tooling repository. To this end, it seeks for the `reporting` property
within the definition of the tool whose output is being parsed. Consequently,
**if the `reporting` property has not been set, the API skips the validation**.

# Configuration requirements
As mentioned before, the QAA module relies on the information 1) tooling
metadata, and 2) matchmaking process
