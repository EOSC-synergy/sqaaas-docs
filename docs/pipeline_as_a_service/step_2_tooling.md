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

We've got you covered for these SQAaaS-supported tools: you do not need to
define services for them. This is the reason why this step is optional (i.e.
whenever the pipeline work relies entirely on the supported tools). A clear
exception to this rule is when requiring a different version of the tool than
the one supported.

:::

## How to define a tooling service
As already introduced, the *tooling services* are based on Docker containers.
Hence, there are two main ways to define them, either by **pulling** or
**building**.

### Pulling an image from a Docker registry
The image has to be already available in a Docker registry such as [Docker
Hub](https://hub.docker.com/). This registry is indeed the default one, so
unless defined in the `Image Name` field, the pipeline at runtime will try to
fetch it from Docker Hub platform.

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

### Building the image from a Dockerfile description
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

### Advanced options
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
