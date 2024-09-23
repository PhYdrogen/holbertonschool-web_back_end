#!/usr/bin/env python3
""" 10 files """

def update_topics(mongo_collection, name, topics):
    """ update the topics for a collection """
    mongo_collection.update_one({"name":name}, {"$set": {"topics":topics}})
