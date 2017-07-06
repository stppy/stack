script todo en uno
================

**En linux:**

Se asume que ya tenemos git ;-)

**Nos desplazamos dentro del repositorio que acabamos de clonar y ejecutamos:**

<pre>
./build_dev.sh
</pre>

**En linux ejecutamos:**
<code>
sudo echo "127.0.0.1 login.stp.gov.py login spr.stp.gov.py spr" >> /etc/hosts
</code>

**En windows ponemos en archivo hosts:**
<code> 127.0.0.1 login.stp.gov.py login spr.stp.gov.py spr</code>

**Para construir el entorno:**

<code>docker-compose -f stp-dev.yml build</code>


**Para iniciar el entorno:**

<code>docker-compose -f stp-dev.yml up</code>



**Para iniciar sesion ssh dentro del contenedor correr:**

<code>docker exec -it entornodocker_XXXX_1 /bin/bash</code>

siendo XXXX los nombres designados en el archivo stp-dev.yml


**Requerimientos:**

* Git
* Docker 1.13.0+
* Docker Compose 1.13.0+
* OpenJDK 8
* Maven 3+

Testeado con:
 1. Docker 17.03.1-ce y Docker Compose 1.14.0-rc2 sobre Ubuntu Xenial 16.04.2
 2. Docker 17.06.0-ce y Docker Compose 1.14.0 sobre Centos 7.

* Ubicar los archivos spr.sql y tablero.sql en el file/path/pgalpine/sql
* Clonar los repositorios spr y tcp dentro de la carpeta repos (facilita el auto-deploy)
* En los archivos pom.xml de cada proyecto, reemplazar la linea:

<pre>&lt;outputDirectory&gt;/usr/share/tomcat/webapps&lt;/outputDirectory&gt; </pre>

con:

<pre>&lt;outputDirectory&gt;../webapps&lt;/outputDirectory&gt;</pre>

Configuramos vhost locales en nuestro equipo, apuntando a localhost lo siguiente:


Instalación de Docker
=====================


**Referencia a docker y docker-compose:**

* http://overapi.com/docker
* https://docs.docker.com
* https://docs.docker.com/compose




**Centos 7**


**Como usuario con permisos para sudo, ejecutamos:**


<pre>curl -fsSL https://get.docker.com/ | sh

sudo systemctl start docker
</pre>

Damos permiso a nuestro usuario para utilizar docker:

<pre>sudo usermod -aG docker $(whoami) </pre>

Reiniciamos la sesión del usuario y comprobamos la versión de docker con:

<pre>docker version </pre>


**Instalamos docker-compose:**


<pre>
sudo curl -L https://github.com/docker/compose/releases/download/1.14.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose
</pre>


Verificamos la versión de docker-compose instalada (1.14.0):

<code>docker-compose version<code>
