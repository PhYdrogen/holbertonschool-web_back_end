#!/usr/bin/python3
import base_caching

class BasicCache(base_caching.BaseCaching):
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        if (key or item) is None:
            return
        self.cache_data[key] = item
    
    def get(self, key):
        try:
            if key is None:
                return None
            return self.cache_data[key]
        except KeyError:
            return None