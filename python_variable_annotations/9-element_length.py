#!/usr/bin/env python3
from typing import Sequence, Iterator


def element_length(lst: Iterator) -> list[tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
