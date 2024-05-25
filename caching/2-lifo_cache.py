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
        if (key or item) is None:
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
        """ the method to get from the cache """
        try:
            if key is None:
                return None
            return self.cache_data[key]
        except KeyError:
            return None
