""" Exercice file for redis """
import redis
from uuid import uuid4
import typing

class Cache:
    """A simple cache"""

    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: typing.Union[str, bytes, int, float]) -> str:
        """Store data in the cache"""
        key = str(uuid4())
        self._redis.set(key, data)
        return key
    
    def get(self, key: str, fn: typing.Callable | None) :
        """Get data from the cache"""
        if key is None or key == "":
            return None
        if fn is None:
            return self._redis.get(key)
        else:
            return fn(self._redis.get(key))

    def get_str(self):
        """ method to get string """
        

    def get_int(self):
        """ method to get int """

