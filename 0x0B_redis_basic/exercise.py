#!/usr/bin/env python3
""" Exercice file for redis """
import redis
import uuid
from typing import Callable, Union, Optional
from functools import wraps


def count_calls(fn: Callable) -> Callable:
    """Count the number of calls to a function"""

    @wraps(fn)
    def wrapper(*args, **kwds):
        """Wrap the function"""
        cache = args[0]
        cache._redis.incr(fn.__qualname__)
        return fn(*args, **kwds)
    return wrapper


class Cache:
    """A simple cache"""

    def __init__(self) -> None:
        """Init the cache"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """Store data in the cache"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None
            ) -> Optional[Union[str, bytes, int, float]]:
        """Get data from the cache"""
        if fn is None:
            return self._redis.get(key)
        else:
            return fn(self._redis.get(key))

    def get_str(self, key: str) -> Union[str, None]:
        """ method to get string """
        return self.get(key, fn=lambda d: d.decode('utf-8'))

    def get_int(self, key: str) -> Union[int, None]:
        """ method to get int """
        return self.get(key, fn=int)
