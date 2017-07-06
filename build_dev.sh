#!/usr/bin/env bash

file="already.build"
if [ -f "$file" ]
then
    echo "Continuando..."
    sleep 1s
    echo "Continuando...."
    sleep 1s
    echo "Continuando....."
    sleep 1s

    echo "Clonando Base de Datos"
    wget https://git.stp.gov.py/dis/docker-files/raw/master/sql/spr.sql.gz -O files/pgalpine/sql/spr.sql.gz
    wget https://git.stp.gov.py/dis/docker-files/raw/master/sql/tablero.sql.gz -O files/pgalpine/sql/tablero.sql.gz

    echo "Clonando repositorios"
    cd repos
    git clone https://github.com/stppy/tcp
    git clone https://github.com/stppy/spr
    line_old='<outputDirectory>/usr/share/tomcat/webapps</outputDirectory>'
    line_new='<outputDirectory>../webapps</outputDirectory>'
    sed -i "s%$line_old%$line_new%g" ./tcp/pom.xml
    sed -i "s%$line_old%$line_new%g" ./spr/pom.xml

    echo "Compilando Tablero."
    cd tcp
    echo "Compilando Tablero.."
    sleep 1s
    echo "Compilando Tablero..."
    mvn install
    echo "Compilando SPR."
    cd ../spr
    sleep 1s
    echo "Compilando SPR.."
    echo "Compilando SPR..."
    mvn install
    cd ../..
    echo "Iniciando entorno."
    sleep 1s
    echo "Iniciando entorno.."
    sleep 1s
    echo "Iniciando entorno..."
    ./run.sh

else
    echo -n "Por favor seleccione su sistema operativo: Ubuntu (u), Centos (c): "

    read so
    case $so in

        [uU])
                echo "Ubuntu"
                echo "Configurando $JAVA_HOME.."
                sudo cp ./javau.sh /etc/profile.d/java.sh
                source /etc/profile.d/java.sh
                sudo apt-get -y install openjdk-8-jdk openjdk-8-jre maven wget gzip
                ;;

        [cC])
                echo "Configurando $JAVA_HOME.."
                sudo cp ./javac.sh /etc/profile.d/java.sh
                source /etc/profile.d/java.sh
                echo "Centos";
                sudo yum -y install java-1.8.0-openjdk maven wget gzip

                echo "Requerimientos Instalados! Continuando...."
                ;;
        *) echo "Entrada no valida"
            ;;
    esac

    echo "Descargando DOCKER...."
    curl -fsSL https://get.docker.com/ | sh

    echo "Iniciando el servicio de DOCKER...."
    sudo service docker start

    echo "Dando permisos a tu usuario para usar docker...."
    sudo usermod -aG docker $(whoami)


    echo "Descargando e instalando DOCKER COMPOSE...."
    sudo curl -L https://github.com/docker/compose/releases/download/1.14.0/docker-compose-`uname -s`-`uname -m` -o "/usr/local/bin/docker-compose"
    sudo chmod +x /usr/local/bin/docker-compose

    echo "Es necesario reiniciar el equipo y volver a correr el script para continuar."
    echo "Desea reiniciar? S/N"
    read REPLY
    echo    # (optional) move to a new line
    if [[ $REPLY =~ ^[Ss]$ ]]
        then
            touch already.build
            sudo reboot
        else
            echo "Se recomienda cerrar y volver a abrir la sesion del usuario actual para poder usar docker"
            touch already.build
    fi
fi