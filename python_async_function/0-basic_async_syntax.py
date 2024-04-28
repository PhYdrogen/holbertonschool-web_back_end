#!/usr/bin/env python3
"""
BASIC ASYNC SYNTAX
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """ function that takes max_delay as int and output and float """
    ran = random.uniform(0, float(max_delay))
    await asyncio.sleep(ran)
    return float(ran)
