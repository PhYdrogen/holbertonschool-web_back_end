#!/usr/bin/python3
"""
File FIFOCache
"""

import base_caching


class FIFOCache(base_caching.BaseCaching):
    """ First In First Out algorithm """
    def __init__(self):
        """ the init method """

        super().__init__()

    def put(self, key, item):
        """ the method to put to the cache """
        if (key or item) is None:
            return

        first = ""
        if len(self.cache_data) >= self.MAX_ITEMS:
            for i, keys in enumerate(self.cache_data.keys()):
                if (i == 0):
                    first = keys
                if (keys == key):
                    self.cache_data[key] = item
                    return
            self.cache_data.pop(first)
            print("DISCARD:", first)
            self.cache_data[key] = item

            return
        self.cache_data[key] = item

    def get(self, key):
        """ the method to get from the cache """
        try:
            if key is None:
                return None
            return self.cache_data[key]
        except KeyError:
            return None
