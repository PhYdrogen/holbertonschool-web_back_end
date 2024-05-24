#!/usr/bin/python3
import base_caching

class LIFOCache(base_caching.BaseCaching):
    def __init__(self):
        super().__init__()
        self.last = ""

    def put(self, key, item):
        lon = len(self.cache_data)
        if lon == self.MAX_ITEMS:
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
        try:
            if key is None:
                return None
            return self.cache_data[key]
        except KeyError:
            return None