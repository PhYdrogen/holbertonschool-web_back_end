#!/usr/bin/env python3
"""
coroutine that will execute async_comprehension
four times in parallel using asyncio.gather
"""

import asyncio
import time


async def measure_runtime() -> float:
    """ measure_runtime should measure the total
    runtime and return it """

    start = time.time()
    async_c = __import__("1-async_comprehension").async_comprehension
    await asyncio.gather(*[
        async_c(),
        async_c(),
        async_c(),
        async_c(),
        ])
    return time.time() - start
