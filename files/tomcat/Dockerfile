# Basado en el excelente trabajo realizado en: https://github.com/CentOS/CentOS-Dockerfiles/tree/master/postgres/centos7
# Creado y mantenido por Raul Aguiar Czajkowski
# raczajko@gmail.com, raguiar@stp.gov.py

FROM centos:centos7
MAINTAINER Raul Czajkowski <raczajko@gmail.com>

#Actualizamos S.O. base, agregamos EPEL y dependencias
RUN yum -y update; yum clean all
RUN yum -y install sudo epel-release; yum clean all
RUN yum -y install nano wget vim git tar net-tools; yum clean all

#Instalacion de Tomcat
#Basado parcialmente en el excelente trabajo
#en: https://github.com/kirillF/centos-tomcat/blob/master/Dockerfile
#TODO: congelar version de JAVA
RUN yum -y install java-1.8.0-openjdk

# Prepare environment
ENV JAVA_HOME /etc/alternatives/jre_openjdk
ENV CATALINA_HOME /opt/tomcat
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin:$CATALINA_HOME/scripts


# Install Tomcat
ENV TOMCAT_MAJOR 7
ENV TOMCAT_VERSION 7.0.79

RUN wget https://git.stp.gov.py/dis/docker-files/raw/master/apache-tomcat-7.0.79.tar.gz && \
 tar -xvf apache-tomcat-${TOMCAT_VERSION}.tar.gz && \
 rm apache-tomcat*.tar.gz && \
 mv apache-tomcat* ${CATALINA_HOME}

RUN chmod +x ${CATALINA_HOME}/bin/*sh

# Create Tomcat admin user
ADD ./create_admin_user.sh $CATALINA_HOME/scripts/create_admin_user.sh
ADD ./tomcat.sh $CATALINA_HOME/scripts/tomcat.sh
ADD ./catalina.sh $CATALINA_HOME/bin/catalina.sh
RUN chmod +x $CATALINA_HOME/scripts/*.sh

# Create tomcat user
RUN groupadd -r tomcat && \
 useradd -g tomcat -d ${CATALINA_HOME} -s /sbin/nologin  -c "Tomcat user" tomcat && \
 chown -R tomcat:tomcat ${CATALINA_HOME}

#SSL TOMCAT + MEMCACHED
#CERTS
ADD ./opt/stp.jks /opt/stp.jks
ADD ./opt/stpgovpy.crt /opt/stpgovpy.crt
#CONF FILES
ADD ./conf/context.xml /opt/tomcat/conf/context.xml
ADD ./conf/server.xml /opt/tomcat/conf/server.xml
#JAR LIBS
ADD ./lib/memcached-session-manager-1.6.5.jar /opt/tomcat/lib/memcached-session-manager-1.6.5.jar
ADD ./lib/memcached-session-manager-tc7-1.6.5.jar /opt/tomcat/lib/memcached-session-manager-tc7-1.6.5.jar
ADD ./lib/spymemcached-2.10.3.jar /opt/tomcat/lib/spymemcached-2.10.3.jar
ADD ./lib/couchbase-client-1.1.9.jar /opt/tomcat/lib/couchbase-client-1.1.9.jar
#ADD CERT
#http://www.itninja.com/question/silent-import-java-certificate
#https://stackoverflow.com/questions/24532103/java-keytool-add-self-signed-certificate-without-promting-yes-no-from-user
RUN /usr/bin/keytool -import -v -noprompt -alias 1 -keystore /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.131-3.b12.el7_3.x86_64/jre/lib/security/cacerts -file /opt/stpgovpy.crt -storepass changeit

WORKDIR /opt/tomcat

EXPOSE 8080 8009 8443 8000

CMD ["/bin/bash", "/opt/tomcat/scripts/tomcat.sh"]