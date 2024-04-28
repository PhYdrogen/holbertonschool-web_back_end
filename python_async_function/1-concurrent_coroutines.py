#!/usr/bin/env python3
"""
Using back the fn and waiting something
"""

import typing 


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """ takes 2 int, n, max_delay and output a list of waited time """
    file = __import__('0-basic_async_syntax')
    arr: typing.List[float] = []
    i: int = 0
    while (i < n):
        arr.append(await file.wait_random(max_delay))
        i += 1
    return sorted(arr)
