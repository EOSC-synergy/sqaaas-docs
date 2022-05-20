---
title: Quality Assurance & Awarding
---

The **Quality Assessment & Awarding (QAA)** module analyzes the level of
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

## What happens under the hood?
Unsurprinsingly, the assessment process uses a CI/CD pipeline in order to
execute the complete set of tools that will evaluate the multiple quality
attributes covered in the criteria. The pipeline is composed by several stages
and defined according to the following requirements:
- each stage in the pipeline executes a single tool,
- the stages are run sequentially, and
- the execution of the pipeline is not interrupted if a stage fails.

## Certifying the results
The selection and execution of the appropriate tools that take part in the
quality assessment process must be accompanied by the validation of their
outputs. Thus, it is not enough to just rely on the exit status of each tool,
but also to inspect the output of the tool as the only way to ensure that any
given quality attribute has been properly evaluated.

*Digital badges are the result of the certification process*. They are issued
using the [Badgr platform](https://info.badgr.com/) that implements the [Open
Badges specification](https://openbadges.org/). Hence, each badge has
associated metadata that is used by the SQAaaS to store relevant data about
the quality assessment process, such as pointers to the standard (with the
definition of the quality criteria), or the build data, using permanent links
to the continuous integration (CI) system. The image below shows the metadata,
as it is displayed by Badgr, for an awarded badge:

<p align="center">
  <img src="/img/badge_metadata.png" alt="Badge metadata"/>
</p>
