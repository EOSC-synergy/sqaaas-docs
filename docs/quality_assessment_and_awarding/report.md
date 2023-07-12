---
title: Analysing the results
---

## The quality report

The results obtained by the QAA module highlight the achievements that
characterize a given code repository, and point developers or code owners to
those specific parts where quality can be improved. Thus, the ultimate goal is
to increase the overall quality of the code so that the software product takes
credit.

The results view shows a report detailing the validity of the criteria covered
during the assessment. This validity is estimated on the basis of the results
and criticality provided by the individual subcriteria. This means that only
the subcriteria with the highest level of criticality is considered for the
criterion's overall success.

<p align="center">
  <img src="/img/criterion_results.png"/>
</p>

:::note

The codes that identify the subcriteria are aligned, as stated throughout the
docs, with the [A set of Common Software Quality Assurance Baseline Criteria
for Research Projects](https://indigo-dc.github.io/sqa-baseline/) document.

:::

### Awarding through Badges

Reporting is complemented with awarding when the software being analysed
reaches a minimum level of quality. This is based on the fact that, similarly
to the subcriteria covered above, not all the criteria have the same level of
importance. We have previously established those levels in the
[Badging in EOSC-Synergy](synergy_badging_approach.md).

Whenever the assessed code repository has reached any of the required levels
of quality, a digital badge will be displayed on top of the report as shown
in the next image:

<p align="center">
  <img src="/img/award.png"/>
</p>

## The FAIR data case

The quality indicators that assess the compliance of data with the FAIR 
principles are those defined in the
[FAIR Maturity Model](https://doi.org/10.15497/rda00050) specification. The
SQAaaS relies on the [FAIR EVA](https://github.com/EOSC-synergy/FAIR_eva)
tool to compile and show this information in a similar fashion as the reports
for source code and services. Consequently, the report (see example below)
builds on the results of this tool to add:
- Specific *hints* that help to cover an unsuccessful FAIR quality indicator
- A digital *badge* that categorizes the overall FAIRness of the analysed
dataset, which provides a means to establish a minimum set of criteria (through
the lower level badge) and additional higher levels of FAIR compliance.

<p align="center">
  <img src="/img/fair_report.png"/>
</p>
