---
title: Customizing the assessment 
---

The SQAaaS platform executes multiple checks for assessing each criterion and 
associated subcriteria. According to the given criterion, the check might
consist on ensuring the presence of a set of files (e.g. licenses or code of 
conduct for the documentation criterion), analysing their content (for licenses
or metadata for code) or running static/dynamic analysis tools according to the
programming language in use. Check out the 
[current list of tools](../tooling.md) supported in the SQAaaS platform.

## Customizing the behavior of tools: linting and styling

Full compliance with style rules, and in some particular circumstances, with
those related to linting aspects should not be enforced when assessing the 
quality of the code. Legacy or code that
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
