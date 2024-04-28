#!/usr/bin/env python3
"""
Python script for creating and waiting for tasks
that wait a random amount of time
"""

import asyncio


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ Create an asynchronous task that waits for a
    random amount of time up to max_delay seconds """

    wait_random = __import__('0-basic_async_syntax').wait_random

    return asyncio.create_task(wait_random(max_delay))
