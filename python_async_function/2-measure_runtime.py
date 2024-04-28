#!/usr/bin/env python3
"""
Using back the fn and mesuring
"""

import time, asyncio


async def measure_time(n: int, max_delay: int) -> float:
    """ takes 2 int, n, max_delay and output a list of waited time """
    
    wait_n = __import__('1-concurrent_coroutines').wait_n

    start = time.time()
    await wait_n(n, max_delay)

    return start - time.time() / n
