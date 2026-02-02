1.generate package.json
   npm init -y
2.change type to module=>you get error during import and export 
3.create server.js
4.install,import express and make the http server connection ,assign port.
    npm install express

### connect MongoDB database
  
    RESTAPI   ----->Mongodb native driver------->        Mongodb server
    RESTAPI   ----->Mongodb ODM(object document mapping) tool------->        Mongodb server

    a.install mongoose and connect to mongodb server
    b.create schema  of resource =>blueprint of the document
    c.create model of the resource
    d.perform DB operations on that model