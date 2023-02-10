---
slug: /
sidebar_position: 1
title: What is SQAaaS?
---

SQAaaS has been created with the intention of bringing over novel quality
practices when it comes to developing software in research environments.

The SQAaaS platform is developed by CSIC, LIP and UPV.

<a href="https://www.csic.es/en" target="_blank" style={{textDecoration:'none'}}> <img src="/img/logo-csic.png" height="60" style={{margin:'0 18px 0 0'}} /> </a>
<a href="https://www.lip.pt/?lang=en" target="_blank" style={{textDecoration:'none'}}> <img src="/img/logo-lip.png" height="60" style={{margin:'0 18px'}} /> </a>
<a href="https://www.upv.es/en" target="_blank" style={{textDecoration:'none'}}> <img src="/img/logo-upv.png" height="60" style={{margin:'0 18px'}} /> </a>

## Why care about quality in research software?
It often happens that research software is not produced in accordance with some
minimal quality conventions, making it difficult to be adopted, reused or
sustained in the long term.

This appears as a key structural issue since the
research work has to be subject to continual revision and refinement, as the
only form to achieve steady innovation.

## Following the Open Science path
The present and future of science, the Open Science paradigm, promotes not only
the values of openness and accessibility, but in the specific case of software,
also those aligned with the Software Quality Assurance (SQA) processes.
Regardless of their expertise, the SQAaaS platform aids researchers to meet the
good SQA practices when writing code, and it does it through the adherence to
the DevOps culture, and in particular, through the concept of CI/CD pipelines.

## Fostering quality in research software
The SQAaaS portal offers access to two different features, each one with its
own purpose and audience:
- The [**Pipeline as a Service**](pipeline_as_a_service/intro) module provides
  the end user with a graphical means to compose the CI/CD pipelines that will
  verify and validate (V&V) her software. To facilitate the task, each stage in
  the pipeline executes a unit of work that is contextualized in a specific SQA
  criterion. The SQAaaS supports SQA criteria both for
  [software](https://indigo-dc.github.io/sqa-baseline/) and
  [services](https://eosc-synergy.github.io/service-qa-baseline/) standards.
  - Common audience: computational scientists, research software engineers
    (RSEs) and/or any developer code for tackling
- The
  [**Quality Assessment and Awarding**](quality_assessment_and_awarding/intro)
  (QAA) module performs a comprehensive
  SQA analysis in accordance with the criteria from the aforementioned
  standards for software and services. As a result, this module provides not
  only a report summarizing the results of the assessment and pointers to
  improve, but in case that a minimum set of criteria have been met, the QAA
  returns a digital badge (provided by [Badgr](https://info.badgr.com/))
  showcasing the achievements being accomplished by the software.
  - Common audience: any stakeholder within the research ecosystem, from
    researchers (individuals, communities) to policy makers or funding
    organisations.

<p align="center">
  <img src="/img/sqaaas.png"/>
</p>

<!--
## Multiple interfaces
The SQAaaS plaform offers several interfaces, which are suitable for diverse
developer profiles in terms of expertise in software engineering topics. From
higher to lower levels, one can find the web portal, the API, and the CI
library (JePL), which is based on the Jenkins Pipeline as Code (PaC) solution.
The latter is the most versatil way to customize your CI/CD pipelines, but it
requires previous knowledge on Jenkins PaC if you want to take the most out of
it. The two former interfaces are not as customizable, but facilitate the
composition of those pipelines, hiding the complexity of the underlying CI
language, and thus, being technology agnostic. This is paramount for the
adoption of the CI/CD technologies by researchers since there are a lot of CI
solutions out there, each one with its own CI language. The SQAaaS relies on
Jenkins PaC, but one would need to deal with it only in the event of using the
JePL library for the most complex use cases, since this library provides a
minimal working sample of a Jenkinsfile.
-->
