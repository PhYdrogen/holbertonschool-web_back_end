#!/usr/bin/env python3
"""
the file contain fn async_generator
"""


async def async_comprehension():
    """ generate 10 random number """

    async_generator = __import__('0-async_generator').async_generator
    return [i async for i in async_generator()]
