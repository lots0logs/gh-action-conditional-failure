FROM node:lts

COPY . .

RUN yarn

ENTRYPOINT ["node", "/entrypoint.js"]

LABEL maintainer="Dustin Falgout <dustin@falgout.us>"
LABEL repository=https://github.com/lots0logs/gh-action-get-changed-files
LABEL com.github.actions.name="Conditional Failure"
LABEL com.github.actions.description="Fail when certain conditions are met."
LABEL com.github.actions.icon=alert-triangle
LABEL com.github.actions.color=yellow
