#!/usr/bin/env python3
from typing import Callable
"""
Complex types - functions
"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Complex types - functions """
    def fn(val: float) -> float:
        return val * multiplier
    return fn
