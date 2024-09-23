#!/usr/bin/env python3
""" 8 files """

def list_all(mongo_collection):
    """ list all elem """
    if mongo_collection is None:
        return []
    mongo_collection.find()
