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
| Code Management (QC.Man, QC.Acc)  | [![git](/img/logo_git.png "git")](https://git-scm.com/) |

|                                   | Python |    Golang   |   Ruby  |    Java    | Javascript |   JSON   | Dockerfile |
|-----------------------------------|:------:|:-----------:|:-------:|:----------:|:----------:|:--------:|:----------:|
| Code Style (QC.Sty)               | [![flake8](/img/logo_flake8.png) flake8](https://flake8.pycqa.org/) | [![staticcheck](/img/logo_staticcheck.png "staticcheck")](https://staticcheck.io/) | [![rubocop](/img/logo_rubocop.png "rubocop")](https://rubocop.org/) | [![checkstyle](/img/logo_checkstyle.png "checkstyle")](https://checkstyle.sourceforge.io/) | [![stylelint](/img/logo_stylelint.png "stylelint")](https://stylelint.io/) | [![jsonlint](/img/logo_json.png) jsonlint](https://github.com/zaach/jsonlint) | [![hadolint](/img/logo_hadolint.png "hadolint") hadolint](https://github.com/hadolint/hadolint) |
| Security Static Analysis (QC.Sec) | [![bandit](/img/logo_bandit.png "bandit")](https://bandit.readthedocs.io/) | [![gosec](/img/logo_gosec.png "gosec") gosec](https://github.com/securego/gosec) |         |            |            |          |            |


|                                   |   Markdown   |   reStructuredText    |
|-----------------------------------|:------------:|:---------------------:|
| Documentation (QC.Doc)            | [![markdownlint](/img/logo_markdownlint.png "markdownlint") markdownlint](https://github.com/markdownlint/markdownlint") | [![restructuredtext-lint](/img/logo_restructuredtext.png "restructuredtext-lint") restructuredtext-lint](https://github.com/twolfson/restructuredtext-lint) |

## Customizing the behavior of tools: linting and styling

Style rules, and in some particular circumstances, those related to linting 
aspects might not be considered when assessing the code. Legacy or code that
has been developed over a extended period of time cannot be easily adapted to
new quality standards or trends. As a result, the SQAaaS allows passing
exceptions to the default rules through the use of configuration files (as long
as the tool supports them).

Throughout this section we summarize how to alter the default behavior of the
standards used by the tools supported in the SQAaaS platform. It is important
to stress that the configuration file/s must exist in the version of the code
repository that we are assessing through the SQAaaS, and placed in the location
expected by the tool.

### flake8 (Python)

[`flake8`](https://flake8.pycqa.org/) allows
[3 different locations](https://flake8.pycqa.org/en/latest/user/configuration.html#configuration-locations)
for the configuration files. Either way, you need to have a `[flake8]` section
where you will add your exceptions. An example that excludes a set of rules and
defines a maximum line length of 120, would be:

```
[flake8]
extend-ignore = E402, F841, F821, E722
max-line-length = 120
```

### checkstyle (Java)

[`checkstyle`](https://checkstyle.sourceforge.io/) is currently supported as a
Maven's plugin. Following the documentation, the
[Sun code style](https://checkstyle.sourceforge.io/sun_style.html) is the one
used by default. Based on the 
[Maven's goal `checkstyle:check`](https://maven.apache.org/plugins/maven-checkstyle-plugin/check-mojo.html#checkstyle-check),
you can define your own rules by passing the
[`configLocation` parameter](https://maven.apache.org/plugins/maven-checkstyle-plugin/checkstyle-mojo.html#configLocation),
such as in:

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-checkstyle-plugin</artifactId>
    <version>3.2.2</version>
    <configuration>
        <configLocation>checkstyle.xml</configLocation>
    </configuration>
</plugin>
``` 

Note that your checkstyle's plugin version might be different from the one
used in this example. The `configLocation` points to a file named
`checkstyle.xml` and this is where all modifications shall be added. For
instance, if we would like to increase Sun's default line length to 120 chars
(by default is 80), we would modify Sun's rules (already added in
`checkstyle.xml`) as follows:

```
<module name="LineLength">
    <property name="max" value="120"/>
</module>
```
