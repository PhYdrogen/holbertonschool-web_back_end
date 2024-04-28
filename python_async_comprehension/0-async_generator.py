#!/usr/bin/env python3
"""
the file contain fn async_generator
"""

import random
import asyncio
import typing


async def async_generator() -> typing.AsyncGenerator[float, float]:
    """ generate 10 random number """

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
