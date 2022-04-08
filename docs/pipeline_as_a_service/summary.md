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
required [tooling services](step_2_tooling.md).

Additionally, a series of bash scripts are generated when performing work on
[external repositories](step_1_repositories.md) since the workspace changes.

## Share

## Execute 

