""" Exercice file for redis """
from redis import Redis
import uuid
from typing import Callable, Union, Optional


class Cache:
    """A simple cache"""

    def __init__(self) -> None:
        """Init the cache"""
        self._redis = Redis()
        self._redis.flushdb()

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
