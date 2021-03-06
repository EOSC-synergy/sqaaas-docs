---
title: The pipeline repositories
---

The pipeline repositories are the ones generated by the SQAaaS API in order to
carry out the execution of the generated pipelines. They contain the JePL
files, and optionally (according on how the pipeline was configured), they
might also have a copy of the code base.

### How the SQAaaS depends on it?
- The Pipeline as a Service uses pipeline repositories when the [user triggers
the execution of the pipeline](../pipeline_as_a_service/summary#execute).
- The Quality Assessment and Awarding (QAA) module uses the pipeline
repositories as part of its operation. Pipelines are composed for the
fully-fledged criteria analysis, and thus, they need to be executed before
being validated.

### Outcome
Depending on the SQAaaS module, the name of the pipeline repository matches the
patterns below:

#### Pipeline as a Service
```
pipeline_repository == 'https://github.com/' + github_organisation + pipeline_name + '.sqaaas'
```
where the `pipeline_name` is the value provided in
[the step zero](../pipeline_as_a_service/the_2_step_process.md). So if you used
the current SQAaaS production instance and named your pipeline as "my_pipeline",
the resultant name for the pipeline repository is:
```
https://github.com/eosc-synergy/my_pipeline.sqaaas`
```

#### QAA
```
pipeline_repository == 'https://github.com/' + github_organisation + pipeline_name + '.assess.sqaaas'
```
where the `pipeline_name` is the name of the analysed repository. In this case,
if you are checking "https://github.com/my_user/my_repo" repository in the
current SQAaaS production instance, the resultant name for the pipeline
repository is:
```
https://github.com/eosc-synergy/my_repo.assess.sqaaas`
```
