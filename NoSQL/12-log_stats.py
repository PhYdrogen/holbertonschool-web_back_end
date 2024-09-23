#!/usr/bin/env python3
"""
a script that provides some stats about a nginx dump logs stored in mongo
"""
from pymongo import MongoClient


if __name__ == "__main__":
    """ main app entry """
    client = MongoClient('mongodb://127.0.0.1:27017')
    """ client variable for mongo """
    c = client.logs.nginx
    """ connect to the logs database and connect to nginx collection """
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    """ list of rest method """
    print("{} logs\nMethods:".format(c.estimated_document_count()))
    """ first print to output the list of logs """
    for m in method:
        """ loop in each method """
        print("    method {}: {}".format(m, c.count_documents({"method": m})))
        """ print each method with manual tab """
    print("{} status check".format(c.count_documents({"path": "/status"})))
    """ last print please save my family"""
