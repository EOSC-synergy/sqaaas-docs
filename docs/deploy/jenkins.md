# Jenkins requirements
## pipeline-stage-view-plugin
The [Pipeline Stage View](https://github.com/jenkinsci/pipeline-stage-view-plugin)
plugin relies on the default `com.cloudbees.workflow.rest.external.FlowNodeLogExt.maxReturnChars`
property for fetching the logs using the
[/wfapi/log](https://github.com/jenkinsci/pipeline-stage-view-plugin/blob/master/rest-api/README.md#get-jobjob-namerun-idexecutionnodenode-idwfapilog)
endpoint.

This limit has been shown as not enough for most of the per-stage's console
outputs the SQAaaS relies on. In order to increase this value, the property
above shall be passed at runtime. In most Linux distros, add the following to
the `/etc/default/jenkins` file:
```
JAVA_ARGS="$JAVA_ARGS -Dcom.cloudbees.workflow.rest.external.FlowNodeLogExt.maxReturnChars=40960"
```
