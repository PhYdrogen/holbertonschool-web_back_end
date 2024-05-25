#!/usr/bin/python3
"""
File LIFOCache
"""

import base_caching


class LIFOCache(base_caching.BaseCaching):
    """ Last In First Out algorithm """
    def __init__(self):
        """ the init fn """
        super().__init__()
        self.last = ""

    def put(self, key, item):
        """ the method to put to the cache """
        if key is None or item is None:
            return
        lon = len(self.cache_data)
        if lon >= self.MAX_ITEMS:
            for keys in self.cache_data.keys():
                if keys == key:
                    self.cache_data[key] = item
                    self.last = key
                    return
            self.cache_data.pop(self.last)
            print("DISCARD:", self.last)
            self.cache_data[key] = item
            self.last = key

            return
        self.cache_data[key] = item
        self.last = key

    def get(self, key):
        """ method to get from cache """
        return self.cache_data.get(key, None)
