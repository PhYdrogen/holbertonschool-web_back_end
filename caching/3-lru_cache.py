#!/usr/bin/python3
"""
File LRUCache
"""

import base_caching


class LRUCache(base_caching.BaseCaching):
    """ Least recently used (LRU) algo """
    def __init__(self):
        """ the init fn """
        super().__init__()
        self.arr = []

    def put(self, key, item):
        """ the method to put to the cache """
        if (key or item) is None:
            return
        lon = len(self.cache_data)
        if lon >= self.MAX_ITEMS:
            for keys in self.cache_data.keys():
                if keys == key:
                    self.cache_data[key] = item
                    self.arr.remove(key)
                    self.arr.append(key)
                    return
            self.cache_data.pop(self.arr[0])
            print("DISCARD:", self.arr[0])
            self.cache_data[key] = item
            self.arr.remove(self.arr[0])
            self.arr.append(key)

            return
        self.cache_data[key] = item
        self.arr.append(key)

    def get(self, key):
        """ method to get from cache """
        k = self.cache_data.get(key, None)
        if k is not None:
            self.arr.remove(key)
            self.arr.append(key)
        return k
