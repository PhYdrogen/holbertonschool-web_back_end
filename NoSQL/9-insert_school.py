#!/usr/bin/env python3
""" 9 files """

def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs """
    res = mongo_collection.insert_one(kwargs)
    return res.inserted_id
