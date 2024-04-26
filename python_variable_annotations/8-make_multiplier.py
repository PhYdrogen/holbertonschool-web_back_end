#!/usr/bin/env python3
"""
Complex types - functions
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Complex types - functions """
    def fn(val: float) -> float:
        return val * multiplier
    return fn
