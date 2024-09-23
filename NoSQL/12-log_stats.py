#!/usr/bin/env python3
"""
a script that provides some stats about a nginx dump logs stored in mongo
"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    c = client.logs.nginx
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("{} logs\nMethods:".format(c.estimated_document_count()))
    for m in method:
        print("    method {}: {}".format(m, c.count_documents({"method": m})))
    print("{} status check".format(c.count_documents({"path": "/status"})))
