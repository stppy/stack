#!/usr/bin/env bash
#1 - exporta en p12
openssl pkcs12 -export -in ../nginx/etc/nginx/ssl/*.stp.gov.py.crt -inkey ../nginx/etc/nginx/ssl/*.stp.gov.py.key -out stp.p12

#2 - pasas a un keystore, que posteriormente usara el tomcat
keytool -importkeystore -srckeystore stp.p12 -srcstoretype PKCS12 -destkeystore stp.jks -deststoretype JKS

#3 - configura ese keystore en el tomcat, y configura el tomcat con la ubicacion del keystore y el pass que le pusiste a ese keystore

#<Connector  useBodyEncodingForURI="true" URIEncoding="UTF-8" port="8443" maxThreads="600"  scheme="https" secure="true" SSLEnabled="true" keystoreFile="/opt/stp.jks" keystorePass="stp123" keyPass="stp123" clientAuth="false" keyAlias="1" sslProtocol="TLS" ciphers="TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA" />
#keypass y keystorepass suelen ser lo mismo, usualmente pongo el mismo en ambos
#alias depende si al momento de meter en el keystore le pusiste un alias, sino el alias es 1 por defecto
#en teoria ahi entrando en https://supertomcaserver.domain.ltd:8443
#despues le tiras un nginx o apache con ssl and proffit