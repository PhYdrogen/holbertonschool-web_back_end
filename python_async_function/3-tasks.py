#!/usr/bin/env python3
"""
remplace this with one line
"""

import asyncio

def task_wait_random(max_delay: int) -> asyncio.Task:
    """ remplace this with one line """

    wait_random = __import__('0-basic_async_syntax').wait_random

    return asyncio.create_task(wait_random(max_delay))
    