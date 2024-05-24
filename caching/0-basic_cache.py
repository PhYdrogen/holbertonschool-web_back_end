#!/usr/bin/python3
"""
File BasicCache
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ the most basic cache """
    def __init__(self):
        """ the init fn """

        super().__init__()

    def put(self, key, item):
        """ method to add to cache """

        if (key or item) is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """ method to get from cache """

        try:
            if key is None:
                return None
            return self.cache_data[key]
        except KeyError:
            return None
