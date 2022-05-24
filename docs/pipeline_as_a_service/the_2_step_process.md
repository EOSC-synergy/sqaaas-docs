# Composing your CI/CD pipeline
The Pipeline as a Service will guide you through a 2-step process that will
allow you to create ready-to-be-used CI/CD pipelines.

:::note Naming your pipeline
As an initial requirement, the web will ask you to provide a name for the
pipeline. It is mainly required for the internal operation of the SQAaaS (e.g
to create the associated code repository, to be used as the job name in the CI
system), so it is not crucial for the pipeline itself, but it is highly
recommended to provide a meaningful name.

<p align="center">
  <img src="/img/pipeline_naming.gif"/>
</p>

Once set, click on *Create pipeline* in order to start the process.

:::

### The 2-step process
1. The [Repositories](step_1_repositories.md)
2. The [Quality Criteria](step_2_criteria.md)

### The Summary view
After completing the previous steps, the web interface will redirect you to the
Summary view and show a popup message with the exit status result from the
pipeline creation process.

The Pipeline as a Service offers a number of features in order to visualize,
share and try out your brand new CI/CD pipeline. We explain them on the
[Summary section](summary.md).
