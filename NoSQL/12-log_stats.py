#!/usr/bin/env python3
""" this file is printing the output of a dump """
from pymongo import MongoClient


client = MongoClient('mongodb://127.0.0.1:27017')
c = client.logs.nginx
method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
print(f"{c.estimated_document_count()} logs\nMethods: ")
for m in method:
    print(f"\tmethod {m}: {c.count_documents({"method": m})}")
print(f"{c.count_documents({"path": "/status"})} status check")
