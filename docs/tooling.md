---
title: Tooling in SQAaaS
---

The SQAaaS has built-in support for widely-used tools used within open source
communities. Both the Pipeline as a Service and Quality Assessment and Awarding
modules rely on these tools, with the main difference that the latter selects
transparently the most appropriate set of tools based on the characteristics of
the input asset.

## Open source tools for quality analysis

Validating some of the defined quality criteria requires the support of
specific tools, based commonly on the programming language/s in use. Examples
range from testing frameworks and linters to style checkers. The table below 
summarizes the current tools supported by the SQAaaS platform:

### Source code

| **Code Management (`QC.Man`, `QC.Acc`)** | [![git](/img/logo_git.png "git")](https://git-scm.com/) |
|------------------------------------------|:---:|

| **Licensing (`QC.Lic`)**            | [![licensee](/img/logo_licensee.png "licensee")](https://github.com/licensee/licensee) |
|-------------------------------------|:---:|

|                                         | Python |    Golang   |   Ruby  |    Java    | Javascript |   JSON   | Dockerfile |
|-----------------------------------------|:------:|:-----------:|:-------:|:----------:|:----------:|:--------:|:----------:|
| **Code Style (`QC.Sty`)**               | [![flake8](/img/logo_flake8.png) flake8](https://flake8.pycqa.org/) | [![staticcheck](/img/logo_staticcheck.png "staticcheck") staticcheck](https://staticcheck.io/) | [![rubocop](/img/logo_rubocop.png "rubocop") rubocop](https://rubocop.org/) | [![checkstyle](/img/logo_checkstyle.png "checkstyle") checkstyle](https://checkstyle.sourceforge.io/) | [![stylelint](/img/logo_stylelint.png "stylelint") stylelint](https://stylelint.io/) | [![jsonlint](/img/logo_json.png) jsonlint](https://github.com/zaach/jsonlint) | [![hadolint](/img/logo_hadolint.png "hadolint") hadolint](https://github.com/hadolint/hadolint) |
| **Security Static Analysis (`QC.Sec`)** | [![bandit](/img/logo_bandit.png "bandit") bandit](https://bandit.readthedocs.io/) | [![gosec](/img/logo_gosec.png "gosec") gosec](https://github.com/securego/gosec) | [![brakeman](/img/logo_brakeman.png "brakeman") brakeman](https://brakemanscanner.org/) |            |            |          |            |

|                                   |   Markdown   |   reStructuredText    |
|-----------------------------------|:------------:|:---------------------:|
| **Documentation (`QC.Doc`)**      | [![markdownlint](/img/logo_markdownlint.png "markdownlint") markdownlint](https://github.com/markdownlint/markdownlint") | [![restructuredtext-lint](/img/logo_restructuredtext.png "restructuredtext-lint") restructuredtext-lint](https://github.com/twolfson/restructuredtext-lint) |

| **Code Metadata (`QC.Met`)**      | [![Citation File Format](/img/logo_cff.png "Citation File Format") Citation File Format](https://citation-file-format.github.io/) | [![CodeMeta](/img/logo_codemeta.png "CodeMeta") CodeMeta](https://codemeta.github.io/) |
|---------------------------------|:------------:|:---------------------:|

### (Micro)Services

|                                   |   Infrastructure Manager   |   Elastic Cloud Computing Cluster   |
|-----------------------------------|:------------:|:---------------------:|
| **Deployment (`SvcQC.Dep`)**      | [![im-client](/img/logo_im.png "Infrastructure Manager client") im-client](https://github.com/grycap/im-client) | [![ec3](/img/logo_ec3.png "Elastic Cloud Computing Cluster (EC3)") ec3](https://github.com/grycap/ec3) |

### Research data

| **FAIR (`QC.FAIR`)**            | [![FAIR-eva](/img/logo_fair.jpg "FAIR-eva") FAIR-eva](https://github.com/EOSC-synergy/FAIR_eva) | [![F-UJI](/img/logo_fuji.png "F-UJI") F-UJI](https://www.f-uji.net/) |
|---------------------------------|:------------:|:---------------------:|
