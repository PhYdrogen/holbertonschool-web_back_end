#!/usr/bin/env python3
from typing import Union
"""
Complex types - mixed list
"""


def sum_mixed_list(mxd_lst: list[Union[int, float]]) -> float:
    """ Complex types - mixed list """
    sum: float = 0
    for mx in mxd_lst:
        sum += float(mx)
    return sum
