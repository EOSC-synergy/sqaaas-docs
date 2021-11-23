# Docker's build context
The *build context* is where Docker expects the `Dockerfile` and the series of
files required to complete the build process. The location (path) of the context
is always required, and it is the default location of the `Dockerfile`. However,
as one could expect, through Docker CLI one can define an alternative location
for the `Dockerfile`.

As recommended in [Dockerfile's best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context)
document, the context folder shall be maintained as lightweight as possible
since all the directory content is passed (recursively) to Docker daemon, and
this fact might imply a great deal of memory.

# How SQAaaS deals with the build context?
By default, SQAaaS points the build context to the same path location where the
`Dockerfile` is found (this one is provided by the user). Thus, for instance,
when trying to build a Docker image that exists under `docker/Dockerfile`
(within a code repository), the context is set to `./docker`. This is by far
the most extended approach, where all the additional files required to build the
Docker image are stored in this directory.

# How can I set my own build context?
The SQAaaS allows to define a custom location of the context directory under
the Advanced Options (in the Services view). Using this feature might only be
used when having the Dockefile and the build files in different folders.
