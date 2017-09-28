FROM docker.io/centos:7

ENV NGINX_CONFIGURATION_PATH=/opt/app-root/etc/nginx.d
ENV NGINX_DEFAULT_CONF_PATH=/opt/app-root/etc/nginx.default.d
ENV APP_ROOT=/opt/app-root 

LABEL name="syndesisio/syndesis-ui" \
      maintainer="Syndesis Authors <syndesis@googlegroups.com>" \
      version="1.0" \
      release="1" \
      architecture="x86_64" \
      summary="User interface component for syndesis" \
      description="User interface component for syndesis" \
      com.redhat.component="syndesis-ui-docker" \
      io.k8s.display-name="Syndesis - UI" \
      io.k8s.description="User interface component for syndesis" \
      io.openshift.expose-services="http:8080" \
      io.openshift.tags="syndesis,Syndesis,syndesis-ui"

#Install RHSCL repo and cleanup
RUN yum install -y centos-release-scl && yum install -y rh-nginx110

COPY ./docker/root/ /
RUN sed -i -f $APP_ROOT/nginxconf.sed /etc/opt/rh/rh-nginx110/nginx/nginx.conf && \
    mkdir -p $APP_ROOT/etc/nginx.d/ && \
    mkdir -p $APP_ROOT/etc/nginx.default.d/ && \
    chmod -R a+rwx $APP_ROOT/etc && \
    chmod -R a+rwx /var/opt/rh/rh-nginx110 && \
    chown -R 1001:0 /opt/app-root && \
    chown -R 1001:0 /var/opt/rh/rh-nginx110

RUN source scl_source enable rh-nginx110

#COPY dist 
COPY dist $APP_ROOT/src/

EXPOSE 8080 8443

USER 1001

ENV BASH_ENV=$APP_ROOT/etc/scl_enable \
    APP_ROOT=$APP_ROOT \
    ENV=$APP_ROOT/etc/scl_enable \
    PROMPT_COMMAND=". $APP_ROOT/etc/scl_enable"

#Volume for config.json
VOLUME /opt/app-root/src/

CMD ["/opt/app-root/etc/nginx_run"]
