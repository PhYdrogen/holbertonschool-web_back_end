#!/usr/bin/env python3
""" 10 files """

def update_topics(mongo_collection, name, topics):
    mongo_collection.update_one({"name":name}, {"topics":topics})
