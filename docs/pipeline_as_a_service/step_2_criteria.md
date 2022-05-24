---
title: Step 2 - the (Quality) Criteria
---

The step is the essential part of the pipeline composition since it is at this
stage where the work to be carried out by the pipeline is defined. Hence, **this
is a mandatory step in order to successfully create a CI/CD pipeline with the
SQAaaS platform**.

The pipeline work is represented by the quality criteria, and that means that
at least one criterion has to be defined. The SQAaaS is aligned with quality
standards for [software](https://github.com/indigo-dc/sqa-baseline) and
[services](https://github.com/EOSC-synergy/service-qa-baseline), and you will
notice that by the codes or IDs that are used in the main *Criteria* dropdown
list:

<p align="center">
  <img src="/img/criteria_dropdown.png"/>
</p>

A description of each criterion will appear immediately after it is selected,
so it can help you to make use of the most appropriate for the planned work.

<p align="center">
  <img src="/img/criterion_description.png"/>
</p>

:::caution

The SQAaaS does not validate that the work defined by the user corresponds or
is related with the criterion it has been associated with. Thus, ***the user is
responsible to select the appropriate criterion for the task at hand***.

:::

## A brief overview of the existing quality criteria

:::note

You will notice that the web interface takes some seconds to load the available
criteria. This is because the corresponding metadata is loaded dynamically from
a remote repository every time the Criteria view is accessed.

:::

In the current version, only software-related and data FAIRness criteria are
available. The following table summarizes the available criteria:

| | |
| --- | --- |
| [`QC.Acc`](https://indigo-dc.github.io/sqa-baseline/#code-accessibility-qc.acc) | Promotes the accessibility of the source code as a public resource |
| [`QC.Doc`](https://indigo-dc.github.io/sqa-baseline/#documentation-qc.doc) | Formulates the good-to-have documents associated with code, both in terms of covering the target audience and those related to enabling external contributions |
| `QC.FAIR` | Catch-all criterion for data FAIR assessment. It encompasses all the potential FAIR indicators that can be validated by the associated tools |
| [`QC.Lic`](https://indigo-dc.github.io/sqa-baseline/#licensing-qc.lic) | Resolves the legal aspects for source code reuse through the presence of license files |
| [`QC.Met`](https://indigo-dc.github.io/sqa-baseline/#code-metadata-qc.met) | Promotes the identification and credit of software in research publications |
| [`QC.Sec`](https://indigo-dc.github.io/sqa-baseline/#security-qc.sec) | Sets out the path for detecting unsecure patterns when writting code |
| [`QC.Sty`](https://indigo-dc.github.io/sqa-baseline/#code-style-qc.sty) | Fosters readability of the code by following a style standard |
| [`QC.Uni`](https://indigo-dc.github.io/sqa-baseline/#unit-testing-qc.uni) | Refers to the type of tests to be performed to verify the code |

## Adding the tools
Based on the criterion selected, the SQAaaS supports a set of popular tools
that can help you cover its purpose. These tools are accessible through the
*Tool selection* section, and in particular by clickin on the `Choose a Tool`
dropdown. Each tool has its own set of arguments, including both positional
and optional, that can be used to refine the tool's work. When ready, click
on the `Add tool` button in order to add it as part of the criterion
validation.

:::note

You can add more than one tool per criterion, but all of them shall be added
when defining the given criterion. ***You cannot modify or edit the work from
criteria that have been already defined***.

:::

Once all the required tools are added, be sure to click on `Add Criterion` so
that the defined work is added to the current CI/CD pipeline.

:::caution

After adding a given criterion, you will notice that it is still selectable
in the criteria dropdown list. ***In the event of redefining an existing
criterion, this last one will take precedence***, thus overriding the
previously defined.

:::

<p align="center">
  <img src="/img/criterion_add.gif"/>
</p>

## Running the tools with your own services
The supported tools, such as the one in the example above, are available in
pre-defined container images, so there is no need to create them and/or
define the service or container that will make use of it when the pipeline gets
executed.

This feature eases the composition of the CI/CD pipeline, but may not
be optimal for all use cases. For such use cases, the SQAaaS platform supports
the definition of custom services to execute the tools. This might be handy in
the event of requiring a version of the tool that is incompatible with the
default one or when you also rely on other applications not available in the
default container image, so a custom environment shall be created.

:::note Do I need a custom service?

The main features of the pre-defined images are described in the form of labels
that are displayed once the tool has been selected. They provide valuable
information to make a decision about whether a new service (with a new image)
is needed. Information includes the version of the tool and the name of the
container image.

<p align="center">
  <img src="/img/labels.png"/>
</p>

:::

There are two fundamental ways to create a container or service definition,
either using an existing container image from a container registry (*pull*), or
building a custom image at runtime (*build*).

#### Pulling an image from a container registry
The image has to be already available in a Docker registry for this feature to
work. By default, the pipeline will use [Docker Hub](https://hub.docker.com/).
Follow the steps on "Docker image name syntax" to use a different registry.

:::note Docker image name syntax

The syntax for the `Image Name` field follows the [Docker syntax for image names](https://docs.docker.com/engine/reference/commandline/tag/#extended-description). Note that:
- In order to use a registry other than Docker Hub (`registry-1.docker.io`)
  you need to prefix the image name with such registry's hostname, such as
  `myregistryhost:5000/fedora/httpd:version1.0`
- You can use the values of the available environment variables to compose
  the image name. This includes the ones defined in [Step 1](step_1_repositories##environment) and also the
  ones exposed by the Jenkins plugins, such as the `GIT_*` variables from the
  [Git plugin](https://plugins.jenkins.io/git/#environment-variables).

:::

The following figure showcases the process of defining a tooling service:

<p align="center">
  <img src="/img/tooling_pull.gif"/>
</p>

When clicking on `Add Service` the `python3-service` in the example will be
available when defining the pipeline work in the next *Criteria* step.

#### Building the image from a Dockerfile description
In some cases, a custom Docker image needs to be built out of a Dockerfile
present in the code repository. The required parameters differ slightly from
the ones used when fetching an existing image from an external registry:
- `Dockerfile Location` (required) shall contain the relative path (taken from
  the root path of the repository) to the Dockerfile. *No default value is set*
- `Build arguments` (optional) contains a list of key-value items that will be
  provided to Docker at build time. Follows the
  [Docker convention for build arguments](https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg).
- `Would you like to push the Docker image to a registry?` (optional): if
  required, the built image can be pushed to a Docker registry. To successfully
  perform this operation credentials are needed. As it happened when [accessing
  private repositories in Step 1](step_1_repositories.md#Credentials), we only
  support for the time being credentials defined in the Jenkins service.
  However, there is a workaround to save time if you just want to test the push
  process out. This implies using a catch-all credential that will push the
  resultant image to the EOSC-Synergy organization at Docker Hub.

:::note

If the `Dockerfile` is present at the root of the repository, you still need
to set the value in the `Dockerfile Location`. This is due to the fact that
both the *context* (directory name) and *dockerfile* (file name) values are
taken from such value.

:::

<p align="center">
  <img src="/img/tooling_build.gif"/>
</p>

#### Advanced options
Through the Advanced options section, the Tooling view offers a more detailed
configuration of some of the Docker parameters:
- `Hostname` is the equivalent of
  [Docker Compose's `hostname` property](https://docs.docker.com/compose/compose-file/compose-file-v3/#domainname-hostname-ipc-mac_address-privileged-read_only-shm_size-stdin_open-tty-user-working_dir),
  which sets the container hostname so it can be reached from other containers.
- Volumes:
  - `Volume Type` refers to the type of the volume. Currently, [only `bind` is
    supported](https://docs.docker.com/storage/bind-mounts/).
  - `Volume Source` specifies the source path of the volume (for named volumes,
    the name of the volume shall be used)
  - `Volume Target` points to the destination path where the directory will be
    mounted in the container.

:::note

You can add as many volumes as you need. Remember to click on `Add Volume`
button for each defined volume.

:::
