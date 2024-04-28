#!/usr/bin/env python3
"""
Python script for creating and waiting for
multiple tasks that wait a random amount of time
"""

import typing


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """ Create and wait for 'n' tasks that each wait for a
    random amount of time up to 'max_delay' seconds.
    Returns a list of the waited times in ascending order."""

    task_wait_random = __import__('3-tasks').task_wait_random
    arr: typing.List[float] = []
    i: int = 0
    while (i < n):
        arr.append(await task_wait_random(max_delay))
        i += 1
    return sorted(arr)
