---
title: Step 3 - the (Quality) Criteria
---

The last step in the pipeline composition is actually the most relevant since
here you will define the work to be carried out during the execution of the
CI/CD pipeline.

:::note

Unlike the previous steps ([repositories](step_1_repositories.md) and
[tooling](step_2_tooling.md)), ***filling in the criteria is a mandatory step
in order to successfully create a CI/CD pipeline***.

:::

The SQAaaS is aligned with quality standards for
[software](https://github.com/indigo-dc/sqa-baseline) and
[services](https://github.com/EOSC-synergy/service-qa-baseline), so each piece
of work performed by the pipeline shall be associated with one of the criteria
formulated by those standards. Hence, the Criteria view enforces the user to
select the ID of a quality criterion before moving on to the definition of the
actual piece of work.

<p align="center">
  <img src="/img/criteria_selection.png"/>
</p>

:::caution

The SQAaaS does not validate that the work defined by the user corresponds or
is related with the criterion it has been associated with. Thus, ***the user is
responsible to select the appropriate criterion for the task at hand***.

:::

## The quality criteria
In the current version, only software-related and data FAIRness criteria are
available:
- [`QC.Acc`](https://indigo-dc.github.io/sqa-baseline/#code-accessibility-qc.acc):
  promotes the accessibility of the source code as a public resource.
- [`QC.Doc`](https://indigo-dc.github.io/sqa-baseline/#documentation-qc.doc):
  formulates the good-to-have documents associated with code, both in terms of
  covering the target audience and those related to enabling external
  contributions.
- `QC.FAIR`: catch-all criterion for data FAIR assessment. It encompasses all
  the potential FAIR indicators that can be validated by the associated tools.
- [`QC.Lic`](https://indigo-dc.github.io/sqa-baseline/#licensing-qc.lic):
  resolves the legal aspects for source code reuse through the presence of
  license files.
- [`QC.Met`](https://indigo-dc.github.io/sqa-baseline/#code-metadata-qc.met):
  promotes the identification and credit of software in research publications.
- [`QC.Sec`](https://indigo-dc.github.io/sqa-baseline/#security-qc.sec): sets
  out the path for detecting unsecure patterns when writting code.
- [`QC.Sty`](https://indigo-dc.github.io/sqa-baseline/#code-style-qc.sty):
  fosters readability of the code by following a style standard.
- [`QC.Uni`](https://indigo-dc.github.io/sqa-baseline/#unit-testing-qc.uni):
  refers to the type of tests to be performed to verify the code.

### Defining the work through tools
The SQAaaS supports a set of tools per criterion that are accessible through
the `Choose a Builder Tool` dropdown list. When a tool is selected you might
need to fill in the required values for the tool's arguments. When ready,
click on the `Add tool` button to confirm its execution as part of the given
criterion validation.

:::note

You can add more than one tool per criterion, but all of them shall be added
when defining the given criterion. ***You cannot modify or edit the work from
criteria that have been already defined***.

:::

Once added all the required tools, be sure to click on `Add Criterion` to
finish the criterion work.

:::caution

After adding a given criterion, you will notice that it is still selectable
in the criteria dropdown list. ***In the event of redefining an existing
criterion, this last one will take precedence***, thus overriding the
previously defined.

:::
