#!/usr/bin/env python3
""" 8 files """

def list_all(mongo_collection):
    """ list all elem """
    return mongo_collection.find()
