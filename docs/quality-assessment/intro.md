The Quality Assessment & Awarding (QAA) module analyzes the level of compliance
of a given code repository with the defined standards for software.
Additionally, if the means of deployment is provided, the QAA module will also
check the alignment with the baseline criteria defined under the service
standards.

# Under the hood

## Preparing the workflow

## Validating the results
For tackling the validation, the SQAaaS API relies on the metadata defined in
the tooling repository. To this end, it seeks for the `reporting` property
within the definition of the tool whose output is being parsed. Consequently,
**if the `reporting` property has not been set, the API skips the validation**.

# Configuration requirements
As mentioned before, the QAA module relies on the information 1) tooling
metadata, and 2) matchmaking process
