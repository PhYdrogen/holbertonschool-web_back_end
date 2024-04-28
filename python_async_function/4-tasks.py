#!/usr/bin/env python3
"""
Using back the fn and waiting something
"""

import typing


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """ takes 2 int, n, max_delay and output a list of waited time """
    task_wait_random = __import__('3-tasks').task_wait_random
    arr: typing.List[float] = []
    i: int = 0
    while (i < n):
        arr.append(await task_wait_random(max_delay))
        i += 1
    return sorted(arr)
