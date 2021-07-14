---
title: What is SQAaaS?
---

## Why?

SQAaaS has been created with the intention of bringing over novel quality
practices when it comes to developing software in research environments. It
often happens that research software is not produced in accordance with some
minimal quality conventions, making it difficult to be adopted, reused or
sustained in the long term. This appears as a key structural issue since the
research work has to be subject to continual revision and refinement, as the
only form to achieve steady innovation. Furthermore, the present and future
of science, the Open Science paradigm, promotes these values, and the SQAaaS
platform streamlines the adoption of Software Quality Assurance (SQA)
practices through the adherence to the DevOps culture, and in particular,
through the concept of CI/CD pipelines.

regardless of the developer expertise in software engineering
topics.

## Brief outline

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
