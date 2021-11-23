# What are services?
Services make up the building and testing environments as part of the pipeline
execution. Consequently, the avaliable set of services shall fulfill all the
testing requirements of the piece of software being analyzed, including tools
(e.g. linters) and/or additional services (e.g. databases, APIs, etc.).

## Is it all about containers?
Although there is no technical constraint to use any other technology, such as
virtual machines, we think that containers provide the most suitable means to
run your services. Accordingly, the latest SQAaaS release has been shaped
around containers. This allows us to reduce the complexity of the web interface,
keeping things simple.

## How should you handle/orchestrate your services?
The SQAaaS user is responsible to define the services that will take action in
the testing process, so that the SQAaaS can orchestrate them using a composer.
As the time of writing the only composer available in Docker Compose, but more
will come.
