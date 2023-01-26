---
title: Badging in EOSC-Synergy
---

The approach followed by EOSC-Synergy identifies three levels (gold, silver
and bronze) for the three categories or types of badges (software, services
and data).

## Badges for software
The following table summarizes the software criteria that is associated to
each badge level:

| | Bronze | Silver | Gold |
| ----------- | :-----------: | :-----------: | :--------: |
| Accessibility (`QC.Acc`) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| ~~Code Management (`QC.Man`)~~ | | | :heavy_check_mark: |
| Code Metadata (`QC.Met`) | | :heavy_check_mark: | :heavy_check_mark: |
| Code Style (`QC.Sty`) | | | :heavy_check_mark: |
| ~~Code Workflow (`QC.Wor`)~~ | | | :heavy_check_mark: |
| ~~Delivery (`QC.Del`)~~ | | | :heavy_check_mark: |
| Documentation (`QC.Doc`) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Licensing (`QC.Lic`) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Security Static Analysis (`QC.Sec`) | | | :heavy_check_mark: |
| ~~Unit Testing (`QC.Uni`)~~ | | | :heavy_check_mark: |
| Versioning (`QC.Ver`) | | :heavy_check_mark: | :heavy_check_mark: |

*Note: strikethrough criteria is currently not supported in the SQAaaS platform*

:::info Software criteria baseline

The codes showcased in the table above (e.g. `QC.Acc`) are defined in the
[standard](https://indigo-dc.github.io/sqa-baseline/) to which the current
implementation of the SQAaaS is aligned.

:::

and the images corresponding to each level:

<p align="center">
  <img src="/img/badges_software_all.png"/>
</p>

## Badges for services
The following table summarizes the service criteria that is associated to
each badge level:

| | Bronze | Silver | Gold |
| ----------- | :-----------: | :-----------: | :--------: |
| Deployment (`SvcQC.Dep`) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| API Testing (`SvcQC.API`) | | | :heavy_check_mark: |
| Integration Testing (`SvcQC.Int`) | | | :heavy_check_mark: |
| Functional Testing (`SvcQC.Fun`) | | :heavy_check_mark: | :heavy_check_mark: |
| Performance Testing (`SvcQC.Per`) | | | :heavy_check_mark: |
| Security Dynamic Analysis (`SvcQC.Sec`) | | :heavy_check_mark: | :heavy_check_mark: |
| Documentation (`SvcQC.Doc`) | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

:::info Service criteria baseline

The codes showcased in the table above (e.g. `SvcQC.Dep`) are defined in the
[standard](https://eosc-synergy.github.io/service-qa-baseline/) to which the current
implementation of the SQAaaS is aligned.

:::

and the images corresponding to each level:

<p align="center">
  <img src="/img/badges_service_all.png"/>
</p>
