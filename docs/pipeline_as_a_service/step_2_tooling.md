---
title: Step 2 - the Tooling
---

The CI/CD pipelines need to have access at runtime to the required tools
that perform the defined tasks. The Tooling view provides the ability to
define custom container-based services that host such tool stack.

:::note Pre-defined services

The SQAaaS supports most popular tools for tackling the analysis of the
supported quality criteria. These tools are both generic-purpose and relative
to specific programming languages. In the current version, the SQAaaS supports
only Python and Java programming languages.

We've got you covered for these SQAaaS-supported tools, so you do not need to
define services for them. An exception to this rule might be when requiring a
different version of the tool than the one supported.

:::

## How to define a service
As already introduced, the *services* are container-based, and in particular,
use the Docker solution.
