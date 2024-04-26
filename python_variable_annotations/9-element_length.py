#!/usr/bin/env python3
from typing import Sequence, Iterator
"""
Let's duck type an iterable object
"""


def element_length(lst: Iterator) -> list[tuple[Sequence, int]]:
    """ Let's duck type an iterable object """
    return [(i, len(i)) for i in lst]
