---
title: Sharing the badges
---

The digital badges obtained when assessing digital assets with SQAaaS can be
shared within code and data repository platforms. Here we offer two ways of
doing so, either by using a custom entry that uses the EOSC-Synergy badge image
or through the [shields.io](https://shields.io/) common badge solution.

The specific code in Markdown is available for each of the options through the
quality report as it can be seen in the image below, and throughout the current
document, the specific Markdown excerpts will also be covered.

<p align="center">
  <img src="/img/badge_sharing.png"/>
</p>

The resultant images, displayed usually through the README document, are linked
to the corresponding badge metadata, accessible through
[Badgr](https://info.badgr.com/) page. In the following sections the different
options to share SQAaaS badges are explained.

:::note
The only piece of information you need to change in the following examples is
the URL that corresponds to your badge, which is provided as a result of the
SQAaaS assessment process. The one used for the examples below is
https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw
::: 

### EOSC-Synergy badge image

In this case, we will use a 150x116 pixel sized image so that it does not take
much space in your README. The proposed solution would render as follows:

<p align="center">
  <img src="/img/badge_share_image.png"/>
</p>

The following sections provide examples for displaying the different classes of
EOSC-Synergy badges.

#### gold

```markdown
#### Achievements
[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_gold.png)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS gold badge achieved")
```

#### silver

```markdown
#### Achievements
[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_silver.png)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS silver badge achieved")
```

#### bronze

```markdown
#### Achievements
[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_bronze.png)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS bronze badge achieved")
```

### shields.io badge

The popular [shields.io](https://shields.io/) can be also be used to share a
SQAaaS badge, which would be rendered as:

<p align="center">
  <img src="/img/badge_share_shields.png"/>
</p>

#### gold

```markdown
[![SQAaaS badge shields.io](https://img.shields.io/badge/sqaaas%20software-gold-yellow)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS gold badge achieved")
```

#### silver

```markdown
[![SQAaaS badge shields.io](https://img.shields.io/badge/sqaaas%20software-silver-lightgrey)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS silver badge achieved")
```

#### bronze

```markdown
[![SQAaaS badge shields.io](https://img.shields.io/badge/sqaaas%20software-bronze-e6ae77)](https://eu.badgr.com/public/assertions/bw3v-fVCR6eJoMjwG11afw "SQAaaS bronze badge achieved")
```
