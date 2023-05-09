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

## Customizing the behavior of tools: linting and styling

Style rules, and in some particular circumstances, those related to linting 
aspects might not be considered when assessing the code. Legacy or code that
has been developed over a extended period of time cannot be easily adapted to
new quality standards or trends. As a result, the SQAaaS allows passing
exceptions to the default rules through the use of configuration files (as long
as the tool supports them).

Throughout this section we summarize how to alter the default behavior of the
standards used by the tools supported in the SQAaaS platform.

### flake8 (Python)

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
