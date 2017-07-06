Requerimientos para utilizar SPR o Tablero
======

* OpenJDK 8
* Maven 3+, para construir el proyecto
* Postgresql 9.3+, como repositorio de datos
* Tomcat 7+, para correr los aplicativos deployados
* Memcached, para el manejo de tickets en memoria
* Nginx 1.10+, para servir los archivos estaticos y ser nexo con el backend

Si ya posee instalada alguna de estas herramientas, utilice los siguientes archivos:

www.zip -> archivos estaticos, en /var/www/html según los archivos .conf de nginx:

**Contenido del Directorio conf:**
  
conf  
├── nginx  -> Configuracion de NGINX  
│   ├── conf.d  
│   │   ├── login.stp.gov.py.conf  -> vhost login.stp.gov.py  
│   │   └── spr.stp.gov.py.conf  -> vhost spr.stp.gov.py  
│   ├── gencert.sh  -> script para la generacion de certificados autofirmados  
│   ├── mime.types  -> mimetypes  
│   ├── nginx.conf  -> archivo principal de configuracion para nginx  
│   └── ssl  -> certificado ssl autofirmados ya pre-generados  
│       ├── *.stp.gov.py.crt  
│       ├── *.stp.gov.py.csr  
│       ├── *.stp.gov.py.key  
│       └── *.stp.gov.py.key.org  
└── tomcat  
    ├── conf  -> archivos que deben ir en la carpeta conf del tomcat  
    │   ├── context.xml  
    │   └── server.xml  
    ├── genjks.sh  -> script para generar llave jks con los certificados SSL del NGINX  
    ├── lib  -> jar's necesarios que deben ir en la carpeta LIB del tomcat  
    │   ├── couchbase-client-1.1.9.jar  
    │   ├── memcached-session-manager-1.6.5.jar  
    │   ├── memcached-session-manager-tc7-1.6.5.jar  
    │   └── spymemcached-2.10.3.jar  
    └── opt  -> archivos para tomcat SSL  
        ├── stpgovpy.crt  
        └── stp.jks  -> debe ir en /opt/stp.jks o modificar su ubicacion en server.xml  
