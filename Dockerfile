FROM centos:7.9.2009

RUN yum update -y
RUN yum install -y epel-release
RUN yum update -y
RUN yum install -y git nano mlocate curl wget

# Apache/2.2.15 (Unix)
# https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-centos-7

RUN yum update httpd
RUN yum install httpd -y

# https://operavps.com/docs/install-mysql-on-centos/
COPY ./assets/mysql80-community-release-el7-7.noarch.rpm /tmp/mysql80-community-release-el7-7.noarch.rpm
RUN rpm -ivh /tmp/mysql80-community-release-el7-7.noarch.rpm
RUN yum install mysql-server -y
# RUN mysql --version

# https://www.javatpoint.com/how-to-install-nodejs-on-centos
RUN yum install nodejs -y

# phpMyAdmin 4.1.7
# https://utho.com/docs/tutorial/how-to-install-phpmyadmin-on-centos/
#RUN yum install -y phpmyadmin

RUN yum install -y php
RUN yum install -y unzip
COPY ./assets/phpMyAdmin-4.1.6-all-languages.zip /tmp/phpMyAdmin-4.1.6-all-languages.zip
RUN unzip /tmp/phpMyAdmin-4.1.6-all-languages.zip -d /var/www/html/
RUN mv /var/www/html/phpMyAdmin-4.1.6-all-languages /var/www/html/phpMyAdmin

RUN yum install -y php-mysql php-mbstring

WORKDIR /
COPY ./assets/startup.sh /startup.sh

RUN echo "user=root" >> /etc/my.cnf

RUN yum install -y npm
RUN npm install -g crypto
RUN npm install -g ini
RUN yum install -y openssl