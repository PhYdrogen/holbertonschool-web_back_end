#!/usr/bin/env python3
""" 9 files """

def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs """
    return mongo_collection.insert_many(kwargs)
