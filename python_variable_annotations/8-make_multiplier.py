#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def fn(val: float) -> float:
        return val * multiplier
    return fn
